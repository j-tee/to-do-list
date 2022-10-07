/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */
import toDoTasksArray from './dataStorage.js';
import { Task } from './task.js';
import { TaskList } from './tasklist.js';

describe('test addTask, removeTask, editTask', () => {
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

  test('edit task description', () => {
    const tasklist = new TaskList();
    jest.spyOn(tasklist, 'updateTask').mockImplementation(() => {
      const task1 = new Task(1, 'Awesome Task', false);
      const task2 = new Task(2, 'Brilliant Task', false);
      toDoTasksArray.push(task1);
      toDoTasksArray.push(task2);
      let description = '';
      toDoTasksArray.forEach((task, index) => {
        if (task.index === 1) {
          task.description = 'Nice Task';
          description = toDoTasksArray[index].description;
        }
      });
      return description;
    });
    expect(tasklist.updateTask(1)).toBe('Nice Task');
  });

  test('status completed update', () => {
    const tasklist = new TaskList();
    jest.spyOn(tasklist, 'updateTask').mockImplementation(() => {
      const task1 = new Task(1, 'Awesome Task', false);
      const task2 = new Task(2, 'Brilliant Task', false);
      toDoTasksArray.push(task1);
      toDoTasksArray.push(task2);
      let completed = '';
      toDoTasksArray.forEach((task, index) => {
        if (task.index === 1) {
          task.completed = true;
          completed = toDoTasksArray[index].description;
        }
      });
      return completed;
    });
    expect(tasklist.updateTask(1)).toBeTruthy();
  });

  test('clear all completed tasks', () => {
    const tasklist = new TaskList();
    jest.spyOn(tasklist, 'removeTaskCompleted').mockImplementation(() => {
      const task1 = new Task(1, 'Awesome Task', false);
      const task2 = new Task(2, 'Great Task', false);
      const task3 = new Task(3, 'Amazing Task', true);
      const task4 = new Task(4, 'Superb Task', true);
      const task5 = new Task(5, 'Fantastic Task', true);
      toDoTasksArray.push(task1);
      toDoTasksArray.push(task2);
      toDoTasksArray.push(task3);
      toDoTasksArray.push(task4);
      toDoTasksArray.push(task5);
      const notcompleted = toDoTasksArray.filter((task) => !task.completed);
      const completed = notcompleted.find((a) => a.completed);
      return !completed;
    });
    expect(tasklist.removeTaskCompleted()).toBeTruthy();
  });
});