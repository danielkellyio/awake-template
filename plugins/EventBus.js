import Vue from 'vue'
export default ({ app }, inject) => {
  inject('eventBus', new Vue())
}
