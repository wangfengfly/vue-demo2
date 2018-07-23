<template>
  <div id="app">
    <div class="actions">
      <button @click="toggleModal('new-item')">添加列表</button>
      <button @click="toggleModal('confirm')">删除列表</button>
    </div>
    <modal ref="new-item" :visible="toggle">
      <p>添加新的列表</p>
      <div slot="actions"> <button>保存</button> <button>取消</button> </div>
    </modal>
    <modal ref="confirm" :visible="toggle">
      <p>删除列表？</p>
      <div slot="actions"> <button>删除</button> <button>取消</button> </div>
    </modal>

  </div>
</template>

<script>
import modal from './childs/modal_template'

export default {
  components: {
    'modal': modal
  },
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    toggleModal (item) {
      this.$refs[item].myvisible = !this.$refs[item].myvisible
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  background: #123456;
  color: #FFFFFF;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  margin: 10px auto 0 auto;
  display: inline-block;
  outline: none;
  min-width: 60px;
}
</style>
