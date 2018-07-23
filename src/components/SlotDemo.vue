<template>
  <div>
    <todo-list :todos="todos">
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete">y</span>
        {{ slotProps.todo.text }}
      </template>
    </todo-list>
  </div>
</template>

<script>
import TodoList from './childs/todo_list'

export default {
  name: 'SlotDemo',
  components: {
    'todo-list': TodoList
  },
  data () {
    return {
      todos: [
        {id: 1, text: 'v1'},
        {id: 2, text: 'v2', isComplete: true},
        {id: 3, text: 'v3', isComplete: true},
        {id: 4, text: 'v4', isComplete: false}
      ]
    }
  }
}
</script>

<style scoped>

</style>
