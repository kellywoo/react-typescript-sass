import { counterReducer } from '@app/store/reducer/counter.reducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({counter: counterReducer});

export const store = createStore(rootReducer);
