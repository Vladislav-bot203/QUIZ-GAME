import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createGameReducer from './gameSlice';

const rootReducer = combineReducers({
  createGame: createGameReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})