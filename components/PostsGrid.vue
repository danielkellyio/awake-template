<template>
  <general-grid
    :items="posts"
    :bottom-loader="!allPostsLoaded && firstPageLoaded"
    :theme="$siteConfig.posts.theme"
    :per-row="number ? number : $siteConfig.posts.perRow"
    @atEnd="loadMore()"
  >
    <template v-slot:default="{ item }">
      <post-card
        :title="item.data ? item.data.title : ''"
        :link="item.data ? item.data.slug : ''"
        :image="item.data ? item.data.featureImage : ''"
        :author="item.data && item.data.author ? item.data.author : ''"
        :date="item.data ? item.data.date : ''"
      />
    </template>
  </general-grid>
</template>

<script>
import GeneralGrid from './GeneralGrid'
import PostCard from '~/components/PostCard'

export default {
  components: { PostCard, GeneralGrid },
  props: {
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: { type: String, default: '' },
    exclude: { type: String, default: '' }
  },
  data() {
    return {
      posts: [],
      page: 0,
      allPostsLoaded: false,
      firstPageLoaded: false,
      loading: false
    }
  },
  created() {
    this.$eventBus.$on('route-changed', () => this.reset())
  },
  methods: {
    reset() {
      this.$cms.posts.reset()
      this.page = 0
      this.allPostsLoaded = false
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
      if (!this.allPostsLoaded) {
        this.page++
        this.addPosts()
      }
    },
    async addPosts() {
      this.loading = true
      let posts = []
      if (this.number) {
        posts = await this.getPostsByNumber()
        this.allPostsLoaded = true
      } else {
        try {
          posts = await this.$cms.posts.getByPage(this.page, this.postsFilters)
        } catch (er) {
          this.allPostsLoaded = true
          return
        }
      }

      if (!this.firstPageLoaded) {
        this.posts = posts
        this.firstPageLoaded = true
      } else {
        this.posts = this.posts.concat(posts)
      }
      this.loading = false
    },
    async getPostsByNumber() {
      const posts = await this.$cms.posts.getByNumber(
        this.number,
        this.postsFilters
      )
      return posts
    },
    postsFilters(post) {
      if (this.exclude && this.category) {
        return (
          post.data.category === this.category &&
          post.data.slug !== this.exclude
        )
      }
      if (this.category) {
        return post.data.category === this.category
      }
      if (this.exclude) {
        return post.data.slug !== this.exclude
      }
      return post
    }
  }
}
</script>
