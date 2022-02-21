import * as types from './types';

export const saveStartDate = (date) => {
  return {
    type: types.SAVE_START_DATE,
    payload: date
  };
};
export const saveTask = (task) => {
  return {
    type: types.SAVE_TASK,
    payload: task
  };
};
export const updateTasks = (tasks) => {
  return {
    type: types.UPDATE_TASKS,
    payload: tasks
  };
};
