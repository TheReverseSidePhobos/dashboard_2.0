import * as types from '../actions/types';

const initialState = {
  tasks: [],
  startDate: null,
  modalShow: false
};

export const task_reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL_SUC:
      return {
        ...state,
        modalShow: !state.modalShow
      };
    case types.SAVE_START_DATE:
      return {
        ...state,
        startDate: action.payload
      };
    case types.SAVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case types.UPDATE_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
};
