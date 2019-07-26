<template>
  <div>
    <presentational-grid
      :items="resources"
      :bottom-loader="!allLoaded && firstPageLoaded"
      :theme="theme"
      :per-row="perRow"
      @atEnd="loadMore()"
    >
      <template v-slot:default="{ item }">
        <slot :item="item"></slot>
      </template>
    </presentational-grid>
  </div>
</template>

<script>
import { isString } from 'lodash'
import PresentationalGrid from './PresentationalGrid'

export default {
  components: { PresentationalGrid },
  props: {
    // eslint-disable-next-line vue/require-prop-types
    resource: { required: true },
    theme: { type: String, default: 'blocks' },
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: { type: String, default: '' },
    exclude: { type: String, default: '' }
  },
  data() {
    return {
      allLoaded: false,
      firstPageLoaded: false,
      resources: [],
      page: 0,
      allPostsLoaded: false,
      loading: false
    }
  },
  computed: {
    resourceController() {
      return isString(this.resource) ? this.$cms[this.resource] : this.resource
    }
  },
  created() {
    this.$eventBus.$on('route-changed', () => this.reset())
  },
  methods: {
    reset() {
      this.resourceController.reset()
      this.page = 0
      this.allLoaded = false
      this.firstPageLoaded = false
      this.loading = false
    },
    loadMore() {
      if (this.loading) {
        return
      }
      if (!this.firstPageLoaded) {
        this.reset()
      }
      if (!this.allLoaded) {
        this.page++
        this.addResources()
      }
    },
    async addResources() {
      this.loading = true
      let resources = []
      if (this.number) {
        resources = await this.getPostsByNumber()
        this.allLoaded = true
      } else {
        try {
          resources = await this.resourceController.getByPage(
            this.page,
            this.resourceFilters
          )
        } catch (err) {
          console.log(err)
          this.allLoaded = true
          return
        }
      }

      if (!this.firstPageLoaded) {
        this.resources = resources
        this.firstPageLoaded = true
      } else {
        this.resources = this.resources.concat(resources)
      }
      this.loading = false
    },
    async getPostsByNumber() {
      const resources = await this.resourceController.getByNumber(
        this.number,
        this.resourceFilters
      )
      return resources
    },
    resourceFilters(resource) {
      if (this.exclude && this.category) {
        return (
          resource.category === this.category && resource.slug !== this.exclude
        )
      }
      if (this.category) {
        return resource.category === this.category
      }
      if (this.exclude) {
        return resource.slug !== this.exclude
      }
      return resource
    }
  }
}
</script>
