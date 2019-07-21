<template>
  <generic-card :title="title" :image="image" :link="link" />
</template>

<script>
import GenericCard from './GenericCard'
export default {
  name: 'CategoryCard',
  components: { GenericCard },
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
