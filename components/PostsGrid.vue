<template>
  <div :class="`posts posts-theme-${$siteConfig.posts.theme}`">
    <div class="columns posts is-multiline">
      <div
        v-for="(post, index) in posts"
        :key="post.data ? post.data.title : index"
        :class="`column posts`"
        :style="`width: ${100 / $siteConfig.posts.perRow}%`"
      >
        <post-card
          :title="post.data ? post.data.title : ''"
          :link="post.data ? post.data.slug : ''"
          :image="post.data ? post.data.featureImage : ''"
          :author="post.data ? post.data.author : ''"
          :date="post.data ? post.data.date : ''"
        />
      </div>
    </div>
    <div v-if="!allPostsLoaded && firstPageLoaded" class="loading-posts">
      <spinner />
    </div>
    <intersection-observer @view="loadMore()" />
  </div>
</template>

<script>
import { range } from 'lodash'
import PostCard from '~/components/PostCard'
import IntersectionObserver from '~/components/IntersectionObserver'
import spinner from '~/components/spinner'

export default {
  components: { PostCard, IntersectionObserver, spinner },
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
      this.initPlaceholders()
      this.page = 0
      this.allPostsLoaded = false
      this.firstPageLoaded = false
      this.loading = false
      console.log('resseting')
    },
    initPlaceholders() {
      const number = this.number || this.$siteConfig.posts.perRow
      this.posts = range(number).fill({})
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
          posts = await this.$cms.posts.getByPage(
            this.$axios,
            this.page,
            this.postsFilters
          )
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
        this.$axios,
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

<style lang="scss" scoped>
.posts {
  min-height: 150px;
}
.column {
  flex-basis: auto;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 100% !important;
  }
}
.card {
  @media (min-width: 768px) {
    height: 100%;
  }
  .media-content {
    overflow-x: initial;
  }
}
</style>
<style lang="scss">
.loading-posts .spinner-wrapper {
  margin: 30px auto 0 auto;
}
.posts-theme-grid .posts,
.posts-theme-image-grid .posts {
  .column {
    padding: 0;
  }
}
.posts-theme-image-grid .posts {
  .card-content {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    opacity: 0;
    transition: 0.4s ease all;
  }
  .card-content div,
  .card-content a {
    display: block;
    height: 100%;
  }
  a {
    transition: 0.5s ease all;
    transform: translateY(-15px);
  }
  .title,
  .subtitle,
  strong {
    color: white;
  }
  .card:hover {
    .card-content {
      opacity: 1;
    }
    a {
      transform: translateY(0);
    }
  }
}
</style>
