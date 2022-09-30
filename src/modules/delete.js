/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
import { TaskList } from './tasklist.js';

const deleteTask = (id) => {
  const tasklist = new TaskList();
  tasklist.removeTask(id);
};

export { deleteTask };
