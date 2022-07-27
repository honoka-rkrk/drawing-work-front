import { createSlice } from '@reduxjs/toolkit';

export type openTimeInfo = {
  hour: number;
  minutes: number;
};

type State = {
  openTimeInfo: openTimeInfo;
};

const initialState: State = {
  openTimeInfo: { hour: 21, minutes: 0 }
};

const slice = createSlice({
  name: 'openTime',
  initialState,
  reducers: {
    setOpenTimeInfo: (state, action) => {
      return Object.assign({}, state, { openTimeInfo: action.payload });
    }
  }
});

export default slice.reducer;
export const { setOpenTimeInfo } = slice.actions;
