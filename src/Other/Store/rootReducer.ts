import { combineReducers } from '@reduxjs/toolkit';
import isEntryReducer from './isEntry';
import isAuthorReducer from './isAuthor';
import openTimeReducer from './openTime';
import timeLimitReducer from './timeLimit';

const rootReducer = combineReducers({
  isEntry: isEntryReducer,
  isAuthor: isAuthorReducer,
  openTime: openTimeReducer,
  timeLimit: timeLimitReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
