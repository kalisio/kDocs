<template>
  <div>
    <!-- Forms section -->
    <k-form ref="propertiesForm" :schema="getPropertiesFormSchema()" @field-changed="onPropertiesFormFieldChanged" />
    <k-form ref="featureIdForm" :key="featureIdFormKey" :schema="getFeatureIdFormSchema()" />
    <!-- Buttons section -->
    <div class="row justify-end">
      <k-action
        id="create-layer-action"
        :label="$t('KCreateLayer.CREATE_BUTTON')"
        renderer="form-button"
        :loading="creating"
        @triggered="onCreate" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'k-create-layer',
  inject: ['kActivity'],
  data () {
    return {
      schema: null,
      featureIdFormKey: 1,
      creating: false
    }
  },
  methods: {
    getPropertiesFormSchema () {
      return {
        $schema: 'http://json-schema.org/draft-06/schema#',
        $id: 'http://kalisio.xyz/schemas/create-layer-set-properties#',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 128,
            minLength: 2,
            field: {
              component: 'form/KTextField',
              label: 'KCreateLayer.NAME_FIELD_LABEL'
            }
          },
          description: {
            type: 'string',
            field: {
              component: 'form/KTextField',
              label: 'KCreateLayer.DESCRIPTION_FIELD_LABEL'
            }
          },
          schema: {
            type: 'object',
            field: {
              component: 'form/KFileField',
              label: 'KCreateLayer.CATALOG_SCHEMA_FIELD_LABEL',
              mimeTypes: 'application/json'
            }
          }
        },
        required: ['name', 'schema']
      }
    },
    getFeatureIdFormSchema () {
      return {
        $schema: 'http://json-schema.org/draft-06/schema#',
        $id: 'http://kalisio.xyz/schemas/create-layer-set-feature-id#',
        type: 'object',
        properties: {
          featureId: {
            type: 'string',
            default: this.guessFeatureId(),
            field: {
              component: 'form/KSelectField',
              label: 'KCreateLayer.FEATURE_ID_FIELD_LABEL',
              options: this.getProperties()
            }
          }
        },
        required: ['featureId']
      }
    },
    onPropertiesFormFieldChanged (field, value) {
      if (field === 'schema') {
        this.schema = value
        this.featureIdFormKey += 1
      }
    },
    getProperties () {
      if (this.schema) {
        const properties = _.keys(_.get(this.schema, 'content.properties', {}))
        return _.map(properties, prop => { return { label: prop, value: prop } })
      }
      return []
    },
    guessFeatureId () {
      if (this.schema) {
        const properties = _.keys(_.get(this.schema, 'content.properties', {}))
        for (const prop of properties) {
          if (prop.toLowerCase().includes('id', 'fid', 'featureid', '_id', 'objectid')) return prop
        }
      }
      return ''
    },
    async onCreate () {
      const propertiesResult = this.$refs.propertiesForm.validate()
      const featureIdResult = this.$refs.featureIdForm.validate()
      if (!propertiesResult.isValid || !featureIdResult.isValid) return
      this.creating = true
      // Create an empty layer
      const engine = {
        type: 'geoJson',
        isVisible: true,
        realtime: true
      }
      const newLayer = {
        name: propertiesResult.values.name,
        description: propertiesResult.values.description,
        type: 'OverlayLayer',
        icon: 'insert_drive_file',
        scope: 'user',
        featureId: featureIdResult.values.featureId,
        leaflet: engine,
        // Avoid sharing reference to the same object although options are similar
        // otherwise updating one will automatically update the other one
        cesium: Object.assign({}, engine),
        schema: {
          name: this.schema.name,
          content: this.schema.content
        }
      }
      // Create the layer
      await this.kActivity.addLayer(newLayer)
      // Start editing
      await this.kActivity.onEditLayerData(newLayer)
      this.creating = false
      this.$emit('done')
    }
  },
  created () {
    // Load the required components
    this.$options.components['k-form'] = this.$load('form/KForm')
    this.$options.components['k-action'] = this.$load('frame/KAction')
  }
}
</script>
