import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/sagas';
import {task_reducer} from './reducers/task_reducer';


const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  task: task_reducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;