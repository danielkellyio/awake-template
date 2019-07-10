<template>
  <footer>
    {{ $globals.siteName }} &copy; {{ new Date().getFullYear() }} - All Rights
    Reserved
  </footer>
</template>

<script>
export default {
  name: 'FooterVue'
}
</script>

<style scoped>
footer {
  background: #eee;
  padding: 20px 10px;
  text-align: center;
}
</style>
