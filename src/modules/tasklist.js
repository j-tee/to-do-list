/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty-pattern */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */

import { Task } from './task.js';

class TaskList {
  constructor() {
    this.tasks = [...this.getTasks()];
  }

  storeData = (tasks) => {
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasklist', JSON.stringify(tasks));
    return localStorage.getItem('tasklist').length;
  }

  getTasks = () => {
    this.tasks = JSON.parse(localStorage.getItem('tasklist')) || [];
    return this.tasks;
  }

  getTask = (id) => {
    let task = new Task();
    task = this.tasks.find((a) => a.index === id);
    return task;
  }

  updateTask = (task) => {
    this.tasks = this.getTasks();
    this.tasks.forEach((_task, index) => {
      if (task.index === index + 1) {
        this.tasks.splice(index, 1, task);
      }
    });
    const len = this.storeData(this.tasks);
    return len - this.tasks.length;
  }

  removeTaskCompleted = () => {
    this.tasks = this.getTasks();
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.storeData(this.tasks);
  }

  removeTask = (id) => {
    this.tasks = this.getTasks();
    this.tasks = this.tasks.filter((task) => parseInt(task.index, 10) !== parseInt(id, 10));
    this.storeData(this.tasks);
  }

  addNewTask = (task) => {
    if (task.index > 0) {
      return (this.updateTask(task) === 0 && task.index > 0);
    }
    this.tasks = this.getTasks();
    this.tasks.push(task);
    const len = this.storeData(this.tasks);
    return len > this.tasks.length;
  }
}

export { TaskList };