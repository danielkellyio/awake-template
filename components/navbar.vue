<template>
  <nav
    class="navbar has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item">
        <img :src="logo" :alt="siteName" class="logo" />
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons"></div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import siteGlobals from '~/content/global'
export default {
  data() {
    return {
      siteName: siteGlobals.siteName,
      logo: siteGlobals.logo
    }
  }
}
</script>
