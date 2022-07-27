import { createSlice } from '@reduxjs/toolkit';

export type IsEntryInfo = {
  entryState: boolean;
};

type State = {
  isEntryInfo: IsEntryInfo | null;
};

const initialState: State = {
  //isEntryInfo: { entryState: true }
  isEntryInfo: null
};

const slice = createSlice({
  name: 'isEntry',
  initialState,
  reducers: {
    setIsEntryInfo: (state, action) => {
      return Object.assign({}, state, { isEntryInfo: action.payload });
    }
  }
});

export default slice.reducer;
export const { setIsEntryInfo } = slice.actions;
