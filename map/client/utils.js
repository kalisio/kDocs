import _ from 'lodash'
import math from 'mathjs'
import config from 'config'
import formatcoords from 'formatcoords'
import { uid } from 'quasar'
import { buildUrl } from '../../core/common'
import { Store, utils as kCoreUtils } from '../../core/client'
export * from './leaflet/utils'
export * from './cesium/utils'

export const SelectionLayerName = uid()

// Add knot unit not defined by default
math.createUnit('knot', { definition: '0.514444 m/s', aliases: ['knots', 'kt', 'kts'] })

export async function fetchGeoJson (dataSource, processor) {
  const response = await fetch(dataSource)
  if (response.status !== 200) {
    throw new Error(`Impossible to fetch ${dataSource}: ` + response.status)
  }
  const data = await response.json()
  if (typeof processor === 'function') {
    const features = (data.type === 'FeatureCollection' ? data.features : [data])
    features.forEach(feature => processor(feature))
  }
  return data
}

// Find the nearest time of a given one in a given moment time list
export function getNearestTime (time, times) {
  // Look for the nearest time
  let timeIndex = -1
  let minDiff = Infinity
  times.forEach((currentTime, index) => {
    const diff = Math.abs(time.diff(currentTime))
    if (diff < minDiff) {
      minDiff = diff
      timeIndex = index
    }
  })
  return { index: timeIndex, difference: minDiff }
}

// Find the minimum or maximum time interval in a given moment time list
export function getTimeInterval (times, mode = 'minimum') {
  // Look for the nearest time
  let interval = (mode === 'minimum' ? Infinity : 0)
  times.forEach((currentTime, index) => {
    if (index < (times.length - 1)) {
      const diff = Math.abs(currentTime.diff(times[index + 1]))
      if (mode === 'minimum') {
        if (diff < interval) interval = diff
      } else {
        if (diff > interval) interval = diff
      }
    }
  })
  return interval
}

// Format (reverse) geocoding output
export function formatGeocodingResult (element) {
  let label = element.formattedAddress || ''
  if (!label) {
    if (element.streetNumber) label += (element.streetNumber + ', ')
    if (element.streetName) label += (element.streetName + ' ')
    if (element.city) label += (element.city + ' ')
    if (element.zipcode) label += (' (' + element.zipcode + ')')
  }
  return label
}

// Helper to set a JWT as query param in a target URL
export function setGatewayUrlJwt (item, path, jwt) {
  const url = _.get(item, path)
  if (!url) return
  // Check both the default built-in config or the server provided one if any (eg mobile apps)
  const gateway = Store.get('capabilities.api.gateway', config.gateway)
  if (!url.startsWith(gateway)) return
  // FIXME: specific case of Cesium OpenStreetMap provider
  // Because Cesium generates the final url as base url + tile scheme + extension
  // updating the base url property breaks it, for now we modify the extension
  if ((path === 'cesium.url') && _.get(item, 'cesium.type') === 'OpenStreetMap') {
    const ext = _.get(item, 'cesium.fileExtension', 'png')
    _.set(item, 'cesium.fileExtension', ext + `?${config.gatewayJwtField}=${jwt}`)
  } else {
    _.set(item, path, buildUrl(url, { [config.gatewayJwtField]: jwt }))
  }
}

// Helper to set a JWT as query param in a given set of layers
export function setGatewayJwt (layers, jwt) {
  // If we need to use API gateway forward token as query parameter
  // (Leaflet does not support anything else by default as it mainly uses raw <img> tags)
  layers.forEach(layer => {
    setGatewayUrlJwt(layer, 'iconUrl', jwt)
    setGatewayUrlJwt(layer, 'leaflet.source', jwt)
    setGatewayUrlJwt(layer, 'opendap.url', jwt)
    setGatewayUrlJwt(layer, 'geotiff.url', jwt)
    setGatewayUrlJwt(layer, 'wcs.url', jwt)
    setGatewayUrlJwt(layer, 'cesium.url', jwt)
    setGatewayUrlJwt(layer, 'cesium.source', jwt)
  })
  return layers
}

// Get JSON schema from GeoJson feature' properties
export function generatePropertiesSchema (geoJson, name) {
  const schema = {
    $id: `http://www.kalisio.xyz/schemas/${_.kebabCase(name)}#`,
    title: name,
    $schema: 'http://json-schema.org/draft-06/schema#',
    type: 'object',
    properties: {
    }
  }
  // Enumerate all available properties/values in all features
  const features = (geoJson.type === 'FeatureCollection' ? geoJson.features : [geoJson])
  features.forEach(feature => {
    // FIXME: we don't yet support nested objects in schema
    const properties = (feature.properties ? kCoreUtils.dotify(feature.properties) : {})
    _.forOwn(properties, (value, key) => {
      // Property already registered ?
      if (schema.properties['{key}']) {
        const property = schema.properties[`${key}`]
        // Try to find first non void value to select appropriate type
        if (_.isNil(property)) schema.properties[`${key}`] = value
      } else {
        schema.properties[`${key}`] = value
      }
    })
  })
  _.forOwn(schema.properties, (value, key) => {
    let type = (typeof value)
    // For null/undefined value we will assume string by default
    if ((type === 'object') || (type === 'undefined')) type = 'string'
    schema.properties[`${key}`] = {
      type,
      field: {
        component: (type === 'number' ? 'form/KNumberField'
          : (type === 'boolean' ? 'form/KToggleField' : 'form/KTextField')),
        helper: key,
        label: key
      }
    }
  })
  return schema
}

export function formatUserCoordinates (lat, lon, formatStr) {
  if (formatStr === 'aeronautical') {
    const coords = formatcoords(lat, lon)
    // longitude group: DDMMML where DD is degree (2 digits mandatory)
    // MMM unit is in 0.1 minutes (trailing 0 optional)
    // L is N/S
    const latDeg = coords.latValues.degreesInt.toString().padStart(2, '0')
    const latMin = Math.floor(coords.latValues.secondsTotal / 6).toString().padStart(3, '0')
    const latDir = coords.north ? 'N' : 'S'
    // longitude group: DDDMMML where DDD is degree (3 digits mandatory)
    // MMM unit is in 0.1 minutes (trailing 0 optional)
    // L is W/E
    const lonDeg = coords.lonValues.degreesInt.toString().padStart(3, '0')
    const lonMin = Math.floor(coords.lonValues.secondsTotal / 6).toString().padStart(3, '0')
    const lonDir = coords.east ? 'E' : 'W'
    return `${latDeg}${latMin}${latDir} ${lonDeg}${lonMin}${lonDir}`
  }

  return formatcoords(lat, lon).format(formatStr)
}
