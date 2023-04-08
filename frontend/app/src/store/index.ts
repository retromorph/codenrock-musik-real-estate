import { combineReducers, createStore } from 'redux';
import { userReducer } from "./user-reducer";
import { workGroupReducer } from "./work-group-reducer";

const combineReducer = combineReducers({user: userReducer, work_groups: workGroupReducer})

export const store = createStore(combineReducer)