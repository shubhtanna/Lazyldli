import { combineReducers } from '@reduxjs/toolkit';
import scoresReducer from '../slices/scoreSlice';

const rootReducer = combineReducers({
  scores: scoresReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
