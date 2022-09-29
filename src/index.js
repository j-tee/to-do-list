/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './styles.css';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
import { TaskList } from '../modules/tasklist.js';
import { Task } from '../modules/task.js';

require('bootstrap-icons/font/bootstrap-icons.css');

// const todoList = [
//   {
//     description: 'wash car',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'clean room',
//     completed: false,
//     index: 2,
//   },
//   {
//     description: 'empty dust bin',
//     completed: false,
//     index: 3,
//   },
//   {
//     description: 'prepare breakfast',
//     completed: false,
//     index: 4,
//   },
//   {
//     description: 'go to gym',
//     completed: false,
//     index: 5,
//   },
//   {
//     description: 'go to work',
//     completed: false,
//     index: 6,
//   },
// ];
const tasklist = new TaskList();
const todoList = tasklist.getTasks();
const addBtn = document.getElementById('add-btn');
const element = document.getElementById('tasks');

console.log(addBtn)

addBtn.addEventListener('click', () => {
  const description = document.forms.task.description.value;
  const task = new Task(0, description, false);
  const tasklist = new TaskList();
  tasklist.addNewTask(task);
});

todoList.forEach((task) => {
  const todo = `
  <li class="list-items">
    <span>
      <input type="checkbox" value=${task.completed} /> ${task.description}
    </span>
    <span id=${task.index} class="task-action">
      <i data-visible="true" id="menu-${task.index}" class="bi bi-three-dots-vertical ${task.index}"></i>
      <i data-visible="false" id="trash-${task.index}" class="bi bi-trash ${task.index}"></i>
    </span> 
  </li>`;
  
  element.insertAdjacentHTML('beforeend', todo);

  const removeBtn = document.getElementById(`trash-${task.index}`);
  removeBtn.addEventListener('click', () => {
    const tasklist = new TaskList();
    tasklist.removeTask(parseInt(removeBtn.id.substring(5), 10));
  });
});

element.innerHTML += '<li class="last-item"><button class="btn-clear">Clear all completed</button></li>';

const spans = document.querySelectorAll('.task-action');
[...spans].forEach((span) => {
  span.addEventListener('click', () => {
    const id = span.getAttribute('id');
    const actionBtns = document.getElementsByClassName(id);
    [...actionBtns].forEach((btn) => {
      const visibility = btn.getAttribute('data-visible');
      if (visibility === 'true') {
        btn.setAttribute('data-visible', false);
      } else {
        btn.setAttribute('data-visible', true);
      }
    });
  });
});
