/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
import { TaskList } from './tasklist.js';

const addNewTask = (task) => {
  const tasklist = new TaskList();
  tasklist.addNewTask(task)
}

export { addNewTask };