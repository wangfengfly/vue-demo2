<template>
  <span>
    $<input ref="input" :value="price" v-on:input="updateValue($event.target.value)">
  </span>
</template>

<script>
export default {
  name: 'currency_input',
  props: ['price', 'num'],
  methods: {
    updateValue: function (value) {
      var v = value.trim().slice(0, value.indexOf('.') + 3)
      if (v !== value) {
        this.$refs.input.value = v
      }
      this.$emit('change', Number(v))
    }
  },
  mounted () {
    console.log('price: ' + this.price)
    console.log('num: ' + this.num)
  }
}
</script>

<style scoped>

</style>
