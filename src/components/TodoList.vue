<template>
  <div>
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat">
      <button>Add</button>
    </form>
    <ul>
      <!-- v-for used in components -->
      <todo-item v-for="(todo,index) in todos" v-bind:key="todo.id" v-bind:title="todo.title" @remove="todos.splice(index, 1)">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './childs/todo_item'

export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo () {
      console.log(this.newTodoText)
      this.todos.push({id: this.nextTodoId++, title: this.newTodoText})
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>

</style>
