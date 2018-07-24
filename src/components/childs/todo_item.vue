<template>
  <li>
    {{ title }}
    <button @click="remove">Remove</button>
  </li>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    remove () {
      this.$emit('remove')
    }
  }
}
</script>

<style scoped>

</style>
