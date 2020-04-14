<template>
  <generic-card :title="title" :image="image" :link="link">
    {{ description }}
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
export default {
  name: 'CategoryCard',
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
