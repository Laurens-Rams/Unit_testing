<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  },
]);

function addTodo() {
  todos.value.push({
    id: todos.value.length + 1,
    text: newTodo.value,
    completed: false,
  });
}
</script>
<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-todo="todo"
      :class="{ completed: todo.completed }"
    >
      <input
        type="checkbox"
        data-todo="todo-checkbox"
        v-model="todo.completed"
      />
      <span>{{ todo.text }}</span>
    </div>
  </div>
  <input type="text" data-todo="new-todo-input" v-model="newTodo" />
  <button @click="addTodo" data-todo="new-todo-btn">Add todo</button>
</template>
<style>
.completed {
  text-decoration: line-through;
}
</style>
