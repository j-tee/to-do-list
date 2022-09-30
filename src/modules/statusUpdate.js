/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

import { Task } from './task.js';
import { TaskList } from './tasklist.js';

const taskList = new TaskList();
const completed = (checked, id) => {
  let task = new Task();
  task = taskList.getTask(parseInt(id, 10));
  task.completed = checked;
  taskList.updateTask(task);
};

const deleteCompletedTasks = () => {
  taskList.removeTaskCompleted();
};

export { completed, deleteCompletedTasks };