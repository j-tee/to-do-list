/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty-pattern */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import { Task } from './task.js';

class TaskList {
  constructor() {
    this.tasks = [];
  }

  storeData = (tasks) => {
    localStorage.setItem(tasks, 'tasklist');
  }

  getTasks = () => {
    this.tasks = localStorage.getItem('tasklist');
    if (this.tasks) {
      return this.tasks;
    }
    return [];
  }

  getTask = (id) => {
    let task = new Task();
    task = this.tasks.find((a) => a.index === id);
    return task;
  }

  updateTask = (task) => {
    this.tasks = this.getTasks();
    this.tasks.forEach((_task, index) => {
      this.tasks.splice(index, 1, task);
    });
    this.storeData(this.tasks);
    this.getTasks();
  }

  removeTask = (id) => {
    this.tasks = this.getTasks();
    this.tasks.filter((task) => task.index !== id);
    this.generateIndex(this.tasks);
    this.getTasks();
  }

  generateIndex = (tasks) => {
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    this.storeData(tasks);
  }

  addNewTask = (task) => {
    this.tasks.push(task);
    this.generateIndex(this.tasks);
    this.getTasks();
  }
}

export { TaskList };