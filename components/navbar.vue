<template>
  <nav
    class="navbar has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img :src="$globals.logo" :alt="$globals.siteName" class="logo" />
      </nuxt-link>
      <hamburger @click="active = !active"></hamburger>
    </div>

    <div
      :class="{
        'navbar-menu': true,
        'is-active': active
      }"
    >
      <ul class="navbar-end">
        <li
          v-for="item in $globals.mainMenu"
          :key="item.link"
          class="navbar-item"
          @click="active = false"
        >
          <nuxt-link :to="item.link">
            {{ item.name }}
          </nuxt-link>
        </li>
        <li class="navbar-item search-box-wrapper">
          <search-box />
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import SearchBox from '~/components/search'
import Hamburger from '~/components/hamburger'
export default {
  components: { SearchBox, Hamburger },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.search-box-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
</style>
