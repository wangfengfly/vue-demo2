<template>
  <div>
    <currency-input :price="price" :num="num" @change="changeinput"></currency-input>
    <p>{{ price }}</p>
    <a @click="aclick">点我</a>
  </div>
</template>

<script>
import CurrencyInput from './childs/currency_input.vue'

export default {
  name: 'PropDemo',
  components: {
    'currency-input': CurrencyInput
  },
  data () {
    return {
      price: 2,
      num: 1
    }
  },
  methods: {
    changeinput: function (val) {
      console.log('val: ' + val)
      this.price = val
    },
    aclick: () => {
      console.log('clicked!')
    }
  }
}
</script>

<style scoped>

</style>
