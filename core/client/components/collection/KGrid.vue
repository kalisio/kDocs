<template>
  <div>
    <div v-if="items.length > 0" class="row">
      <template v-for="item in items">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" :key="item._id">
          <component class="q-pa-sm" :id="item._id" :item="item" :contextId="contextId" :is="renderer.component" v-bind="renderer.props" item-selected="onItemSelected(item)"/>
        </div>
      </template>
      <div v-if="nbPages > 1" class="col-12">
        <q-pagination class="justify-center q-ma-md" v-model="currentPage" :max="nbPages" @input="onPageChanged" :input="true"/>
      </div>
    </div>
    <div v-else class="absolute-center">
      <k-label :text="$t('KGrid.EMPTY_GRID')" icon-size="48px" />
    </div>
  </div>
</template>

<script>
import mixins from '../../mixins'

export default {
  name: 'k-grid',
  mixins: [
    mixins.service,
    mixins.baseCollection
  ],
  props: {
    renderer: {
      type: Object,
      default: () => {
        return {
          component: 'collection/KCard',
          options: {},
          props: {}
        }
      }
    },
    baseQuery: {
      type: Object,
      default: function () {
        return {}
      }
    },
    filterQuery: {
      type: Object,
      default: function () {
        return {}
      }
    },
    listStrategy: {
      type: String
    }
  },
  watch: {
    '$route' (to, from) {
      // React to route changes but reusing the same component as this one is generic
      this.refreshCollection()
    },
    baseQuery: function () {
      this.refreshCollection()
      this.currentPage = 1
    },
    filterQuery: function () {
      this.refreshCollection()
      this.currentPage = 1
    }
  },
  methods: {
    getCollectionBaseQuery () {
      return this.baseQuery
    },
    getCollectionFilterQuery () {
      return this.filterQuery
    }
  },
  created () {
    // Load the component
    this.$options.components[this.renderer.component] = this.$load(this.renderer.component)
    this.$options.components['k-label'] = this.$load('frame/KLabel')
    // Refresh collection
    this.refreshCollection()
    // Whenever the user abilities are updated, update collection as well
    this.$events.$on('user-abilities-changed', this.refreshCollection)
  },
  beforeDestroy () {
    this.$events.$off('user-abilities-changed', this.refreshCollection)
  }
}
</script>