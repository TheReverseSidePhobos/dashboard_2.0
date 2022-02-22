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
export const saveObjForInfo = (obj) => {
  return {
    type: types.SAVE_OBJ_FOR_INFO,
    payload: obj
  };
};
export const infoToggleModalAC = () => {
  return {
    type: types.INFO_TOGGLE_MODAL
  };
};
