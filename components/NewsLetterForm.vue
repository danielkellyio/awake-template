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
      <p>{{ header }}</p>
    </div>
    <div class="message-body">
      <form
        v-if="!submitted"
        target="_blank"
        method="post"
        :action="formAction"
      >
        <div class="field has-addons">
          <p class="control has-icons-left has-icons-right">
            <input
              v-model="email"
              class="input"
              type="email"
              name="EMAIL"
              placeholder="Email"
            />
            <span class="icon is-small is-left">
              <font-awesome-icon icon="envelope" />
              <i class="fas fa-envelope"></i>
            </span>
          </p>
          <div class="control">
            <button type="submit" class="button is-primary">
              {{ $siteConfig.newsletter.btnText || 'Subscribe' }}
            </button>
          </div>
        </div>
      </form>
      <p v-if="submitted">
        {{ $siteConfig.newsletter.successMessage }}
      </p>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      active: true,
      email: '',
      submitted: false
    }
  },
  computed: {
    header() {
      return (
        this.$siteConfig.newsletter.heading || 'Subscribe to Our Newsletter'
      )
    },
    formAction() {
      if (this.$siteConfig.newsletter.mailchimp.on) {
        return this.$siteConfig.newsletter.mailchimp.formAction
      }
      return this.$siteConfig.newsletter.other.formAction
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
    async submitForm() {
      const res = await axios.post(this.$siteConfig.newsletter.postURL, {
        email: this.email
      })
      console.log(res)
      this.submitted = true
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribe-form-wrapper {
  @media (min-width: 500px) {
    position: fixed;
    bottom: 20px;
    right: 0;
    width: 350px;
    transform: translateX(calc(100% - 42px));
    transition: 0.6s ease all;
  }
  @media (max-width: 500px) {
    margin-bottom: 0;
    box-shadow: none;
  }
  .message-header {
    justify-content: start;
    .close {
      margin-right: 16px;
      cursor: pointer;
    }
    @media (max-width: 500px) {
      border-radius: 0;
      .close {
        display: none;
      }
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
