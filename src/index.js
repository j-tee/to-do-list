/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './styles.css';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
import { TaskList } from '../modules/tasklist.js';
import { Task } from '../modules/task.js';
import '@fortawesome/fontawesome-free/js/all.js';

require('bootstrap-icons/font/bootstrap-icons.css');

const tasklist = new TaskList();
const todoList = [...tasklist.getTasks()];
const element = document.getElementById('tasks');

todoList.forEach((task) => {
  const todo = `
  <li class="list-items">
    <span>
      <input id=${task.index} class="checkbox-inputs" type="checkbox" value=${task.completed} /> ${task.description}
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
    tasklist.removeTask(parseInt(removeBtn.id.substring(6), 10));
  });
});

element.innerHTML += '<li class="last-item"><button id="btn-delete" class="btn-clear">Clear all completed</button></li>';

const spans = document.querySelectorAll('.task-action');
[...spans].forEach((span) => {
  span.addEventListener('click', () => {
    const id = span.getAttribute('id');
    const actionBtns = document.getElementsByClassName(id);
    [...actionBtns].forEach((btn) => {
      const visibility = btn.getAttribute('data-visible');
      if (btn.id.substring(0, 5) === 'trash') {
        btn.addEventListener('click', () => {
          const tasklist = new TaskList();
          tasklist.removeTask(parseInt(btn.id.substring(6), 10));
          location.reload();
        });
      }
      if (visibility === 'true') {
        btn.setAttribute('data-visible', false);
      } else {
        btn.setAttribute('data-visible', true);
      }
    });
  });
});

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  const description = document.forms.task.description.value;
  const task = new Task(0, description, false);
  const tasklist = new TaskList();
  tasklist.addNewTask(task);
  location.reload();
});

const checkBoxInputs = document.querySelectorAll('.checkbox-inputs');
const deletelist = [];
[...checkBoxInputs].forEach((btn) => {
  btn.addEventListener('change', (event) => {
    if (btn.checked) {
      deletelist.push(parseInt(btn.id, 10));
    } else {
      deletelist.forEach((num, index) => {
        if (parseInt(btn.id, 10) === num) {
          deletelist.splice(index, 1);
        }
      });
    }
  });
});

const deleteBtn = document.getElementById('btn-delete');
deleteBtn.addEventListener('click', () => {
  const tasklist = new TaskList();
  deletelist.forEach((id) => {
    tasklist.removeTask(id);
  });
  location.reload();
});

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', () => {
  location.reload();
});
