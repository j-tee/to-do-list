/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */
import toDoTasksArray from './dataStorage.js';
import { Task } from './task.js';
import { TaskList } from './tasklist.js';

describe('test addTask and removeTask', () => {
  test('add data to local storage', () => {
    const task = new Task(1, 'Awesome Task', false);
    const tasklist = new TaskList();
    const oldLength = toDoTasksArray.length;
    jest.spyOn(tasklist, 'addNewTask').mockImplementation(() => {
      toDoTasksArray.push(task);
      return toDoTasksArray.length - oldLength > 0;
    });
    expect(tasklist.addNewTask(task)).toBeTruthy();
  });

  test('remove data from local storage', () => {
    const task = new Task(1, 'Awesome Task', false);
    const tasklist = new TaskList();
    const oldLength = toDoTasksArray.length;
    jest.spyOn(tasklist, 'removeTask').mockImplementation(() => {
      toDoTasksArray.splice(task.index - 1, 1);
      return toDoTasksArray.length - oldLength < 0;
    });
    expect(tasklist.removeTask(task)).toBeTruthy();
  });
});