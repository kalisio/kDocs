<template>
  <k-place-chooser @place-chosen="onPlaceChosen" :style="computedStyle" />
</template>

<script>
import { uid, colors } from 'quasar'

const LocationLayerName = uid()

export default {
  name: 'k-search-location',
  inject: ['kActivity'],
  computed: {
    computedStyle () {
      if (this.$q.screen.lt.md) return 'width: 80vw'
      if (this.$q.screen.lt.lg) return 'width: 60vw'
      return 'width: 50vw'
    }
  },
  methods: {
    async createLocationLayer () {
      // Get any previous layer or create it the first time
      const layer = this.kActivity.getLayerByName(LocationLayerName)
      if (!layer) {
        await this.kActivity.addLayer({
          name: LocationLayerName,
          type: 'OverlayLayer',
          scope: 'system',
          isSelectable: false,
          leaflet: {
            type: 'geoJson',
            isVisible: true,
            realtime: true,
            interactive: false,
            popup: { template: '<%= properties.name %>' },
            'icon-classes': 'fas fa-circle',
            'marker-color': colors.getBrand('primary'),
            'icon-color': '#FFFFFF',
            'icon-x-offset': -2,
            'icon-y-offset': 0
          },
          cesium: {
            type: 'geoJson',
            isVisible: true,
            realtime: true,
            popup: { template: '<%= properties.name %>' },
            'marker-symbol': 'marker',
            'marker-color': colors.getBrand('primary')
          }
        })
      }
      if (!this.kActivity.isLayerVisible(LocationLayerName)) await this.kActivity.showLayer(LocationLayerName)
    },
    async updateLocationLayer (location) {
      await this.createLocationLayer()
      await this.kActivity.updateLayer(LocationLayerName, {
        type: 'FeatureCollection',
        features: [{
          _id: LocationLayerName + '-marker',
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [location.longitude, location.latitude] },
          properties: Object.assign({}, location)
        }]
      })
    },
    async removeLocationLayer () {
      await this.kActivity.removeLayer(LocationLayerName)
    },
    onPlaceChosen (location) {
      if (location) {
        // Use altitude or zoom level depending on engine
        if (this.kActivity.is2D()) this.kActivity.center(location.longitude, location.latitude, 18)
        else this.kActivity.center(location.longitude, location.latitude, 750)
        this.updateLocationLayer(location)
      } else {
        this.removeLocationLayer()
      }
    }
  },
  created () {
    // Load the required components
    this.$options.components['k-place-chooser'] = this.$load('input/KPlaceChooser')
  },
  beforeDestroy () {
    this.removeLocationLayer()
  }
}
</script>
