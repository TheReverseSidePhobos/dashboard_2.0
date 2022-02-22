import * as types from '../actions/types';

const initialState = {
  tasks: [],
  startDate: null,
  modalShow: false,
  selectedForInfo: null,
  info_modal_show: false
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
    case types.SAVE_OBJ_FOR_INFO:
      return {
        ...state,
        selectedForInfo: action.payload
      };
    case types.INFO_TOGGLE_MODAL:
      return {
        ...state,
        info_modal_show: !state.info_modal_show
      };
    default:
      return state;
  }
};
