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
    this.tasks = [...this.getTasks()];
  }

  storeData = (tasks) => {
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasklist', JSON.stringify(tasks));
  }

  getTasks = () => {
    this.tasks = JSON.parse(localStorage.getItem('tasklist'));
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
      if (task.index === index + 1) {
        this.tasks.splice(index, 1, task);
      }
    });
    this.storeData(this.tasks);
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

  // generateIndex = (tasks) => {
  //   tasks.forEach((task, index) => {
  //     task.index = index + 1;
  //   });
  //   //this.storeData(tasks);
  // }

  addNewTask = (task) => {
    if (task.index > 0) {
      this.updateTask(task);
      return;
    }
    this.tasks = this.getTasks();
    this.tasks.push(task);
    this.storeData(this.tasks);
  }
}

export { TaskList };