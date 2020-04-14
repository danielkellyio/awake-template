<template>
  <div
    :class="{
      modal: true,
      'is-active': active,
      'is-closing': closing
    }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header v-if="title" class="modal-card-head">
        <p class="modal-card-title">
          {{ title }}
        </p>
        <button class="delete" aria-label="close" @click="close()"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer v-if="footer" class="modal-card-foot">
        <button class="button is-success" @click="$emit('confirm')">
          {{ confirmText }}
        </button>
        <button
          class="button"
          @click="
            close()
            $emit('cancel')
          "
        >
          Cancel
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    triggerText: { type: String, default: '' },
    confirmText: { type: String, default: 'Save' },
    footer: { type: Boolean, default: false },
    id: { type: String, required: true }
  },
  data() {
    return {
      active: false,
      closing: false
    }
  },
  created() {
    this.$eventBus.$on(`modal-triggered`, (id) => {
      if (id === this.id) this.active = true
    })
  },
  methods: {
    close() {
      this.closing = true
      setTimeout(() => {
        this.active = false
        this.closing = false
      }, 300)
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  &.is-active {
    .modal-card {
      animation: fadeInDown 0.3s ease;
    }
    .modal-background {
      animation: fadeIn 0.6s ease;
    }
  }
  &.is-closing {
    .modal-card {
      animation: fadeOutUp 0.3s ease;
    }
    .modal-background {
      animation: fadeOut 0.3s ease;
    }
  }
}
</style>
