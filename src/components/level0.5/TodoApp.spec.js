import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import TodoApp from './TodoApp.vue';

test('renders a todo', () => {
  const wrapper = mount(TodoApp);

  const todoItem = wrapper.vm.todos[0];
  const todo = wrapper.get('[data-todo="todo"]');

  expect(todo.text()).toBe(todoItem.text);
});

test('creates a todo', async () => {
  const wrapper = mount(TodoApp);
  expect(wrapper.findAll('[data-todo="todo"]')).toHaveLength(1);
  await wrapper.find('[data-todo="new-todo-input"]').setValue('New todo');
  await wrapper.find('[data-todo="new-todo-btn"]').trigger('click');
  const todos = wrapper.findAll('[data-todo="todo"]');
  expect(todos).toHaveLength(2);
  expect(todos[1].text()).toBe('New todo');

});

test('completes a todo', async () => {
  const wrapper = mount(TodoApp);
  await wrapper.get('[data-todo="todo-checkbox"]').setValue(true);
  expect(wrapper.get('[data-todo="todo"]').classes()).toContain('completed');
  
});
