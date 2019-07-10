<template>
  <article
    :class="
      `subscribe-form-wrapper message is-dark subtle-box-shadow ${
        active ? 'active' : ''
      }`
    "
  >
    <div class="message-header">
      <font-awesome-icon
        :icon="active ? 'times' : 'envelope'"
        :aria-label="active ? 'close' : 'open'"
        class="close"
        @click="toggle()"
      />
      <p>Subscribe to Our Newsletter</p>
    </div>
    <div class="message-body">
      <div class="field has-addons">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <font-awesome-icon icon="envelope" />
            <i class="fas fa-envelope"></i>
          </span>
        </p>
        <div class="control">
          <a class="button is-primary">
            Subscribe
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      active: true
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribe-form-wrapper {
  position: fixed;
  bottom: 20px;
  right: 0;
  width: 350px;
  transform: translateX(calc(100% - 42px));
  transition: 0.6s ease all;
  .message-header {
    justify-content: start;
    .close {
      margin-right: 16px;
    }
  }

  .message-body {
    height: 0;
    transition: 0.4s ease all;
    transition-delay: 0.6s;
    overflow: hidden;
    padding: 0;
  }
  &.active {
    transform: translateX(0);
    .message-body {
      height: 80px;
      padding: 20px;
    }
  }
}
</style>
