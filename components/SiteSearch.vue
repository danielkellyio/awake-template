<template>
  <div
    :class="{
      'search-wrapper': true,
      active: active,
      transitioning: transitioning,
      inactive: !active && !transitioning
    }"
  >
    <span class="search-bar">
      <input
        id="search-input"
        v-model="query"
        autocomplete="off"
        :class="{
          input: true
        }"
        type="search"
        @keyup.enter="search"
      />

      <ul v-if="matches" class="search-results subtle-box-shadow">
        <div v-if="matches.length">
          <li
            v-for="match in matches"
            :key="match.slug"
            @click="toggleSearchBar()"
          >
            <nuxt-link :to="`/${match.slug}`">
              {{ match.title }}
            </nuxt-link>
            <small class="match-snippet" v-html="match.snippet"></small>
          </li>
        </div>

        <li v-else>
          No results found
          <font-awesome-icon
            icon="times"
            @click="toggleSearchBar()"
          ></font-awesome-icon>
        </li>
      </ul>
    </span>

    <label for="search-input">
      <font-awesome-icon
        icon="search"
        class="search-icon"
        @click="toggleSearchBar()"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {
      active: false,
      transitioning: false,
      matches: false,
      haystack: [],
      query: '',
      lastQuery: ''
    }
  },
  methods: {
    toggleSearchBar() {
      this.transitioning = true
      this.active = !this.active
      this.matches = false
      this.query = ''
      this.lastQuery = ''
      setTimeout(() => {
        this.transitioning = false
      }, 500) // Timeout to allow transition to finish
    },
    async search() {
      if (this.lastQuery === this.query) {
        this.toggleSearchBar()
        return
      }
      this.lastQuery = this.query
      if (this.query === '') {
        this.matches = false
        return
      }
      const posts = this.haystack.length
        ? this.haystack
        : await this.$axios.$get('/api/posts.json')
      const matches = posts.filter((match) => {
        return (
          match.content
            .toLowerCase()
            .replace(/#|_|-|~|>|\*|!|\+|`|\||\[|\]|_|:/g, '')
            .indexOf(this.query.toLowerCase()) > -1
        )
      })

      this.matches = matches.map((match) => {
        match.snippet = this.getMatchSnippet(this.query, match.content)
        return match
      })
    },
    getMatchSnippet(query, haystack) {
      const cleanQuery = query.toLowerCase()
      const words = haystack
        .toLowerCase()
        .replace(/#|_|-|~|>|\*|!|\+|`|\||\[|\]|_|:/g, '')
      const pos = words.indexOf(cleanQuery)
      const start = pos > 25 ? pos - 25 : 0
      const end = words.length > pos + 25 ? pos + 25 : words.length
      const prepend = pos > 25 ? '...' : ''
      const append = words.length > pos + 25 ? '...' : ''
      return (
        prepend +
        words
          .slice(start, end)
          .replace(/^. /, '')
          .replace(/ .$/, '')
          .replace(cleanQuery, `<span>${cleanQuery}</span>`)
          .trim() +
        append
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: relative;
  input {
    width: 0;
    opacity: 0;
    transition: 0.5s ease width, 0.5s opacity;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  &.inactive {
    input {
      padding: 0;
      height: 0;
    }
    .search-icon {
      position: static;
      transform: translateX(-10px);
    }
  }
  &.active {
    input {
      opacity: 1;
      width: 200px;
    }
  }
}
.search-results {
  background: white;
  padding: 10px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
}
.match-snippet {
  font-size: 0.7em;
  display: block;
}
</style>
<style>
.search-wrapper .match-snippet span {
  background: #eee;
  padding: 0 3px;
  display: inline-block;
}
</style>
