/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './styles.css';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

require('bootstrap-icons/font/bootstrap-icons.css');

const todoList = [
  {
    description: 'wash car',
    completed: false,
    index: 1,
  },
  {
    description: 'clean room',
    completed: false,
    index: 2,
  },
  {
    description: 'empty dust bin',
    completed: false,
    index: 3,
  },
  {
    description: 'prepare breakfast',
    completed: false,
    index: 4,
  },
  {
    description: 'go to gym',
    completed: false,
    index: 5,
  },
  {
    description: 'go to work',
    completed: false,
    index: 6,
  },
];

const element = document.getElementById('tasks');
todoList.forEach((task) => {
  const todo = `
  <li class="list-items">
    <span>
      <input type="checkbox" value=${task.completed} /> ${task.description}
    </span>
    <span id=${task.index} class="task-action">
      <i data-visible="true" class="bi bi-three-dots-vertical ${task.index}\"></i>
      <i data-visible="false" class="bi bi-trash ${task.index}\"></i>
    </span> 
  </li>`;
  element.insertAdjacentHTML('beforeend', todo);
});

element.innerHTML += '<li><button class="btn-clear">Clear all completed</button></li>';

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
