import { createSlice } from '@reduxjs/toolkit';

export type timeLimitInfo = {
  minutes: number;
};

type State = {
  timeLimitInfo: timeLimitInfo;
};

const initialState: State = {
  timeLimitInfo: { minutes: 200 }
};

const slice = createSlice({
  name: 'timeLimit',
  initialState,
  reducers: {
    setTimeLimitInfo: (state, action) => {
      return Object.assign({}, state, { timeLimitInfo: action.payload });
    }
  }
});

export default slice.reducer;
export const { setTimeLimitInfo } = slice.actions;
