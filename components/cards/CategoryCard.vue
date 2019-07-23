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
      type: String
    },
    image: {
      type: String
    },
    link: {
      type: String
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
