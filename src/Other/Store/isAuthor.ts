import { createSlice } from '@reduxjs/toolkit';

export type IsAuthInfo = {
  authorState: boolean;
};

type State = {
  isAuthorInfo: IsAuthInfo | null;
};

const initialState: State = {
  //isAuthorInfo: { authorState: true }
  isAuthorInfo: null
};

const slice = createSlice({
  name: 'isAuthor',
  initialState,
  reducers: {
    setIsAuthorInfo: (state, action) => {
      return Object.assign({}, state, { isAuthorInfo: action.payload });
    }
  }
});

export default slice.reducer;
export const { setIsAuthorInfo } = slice.actions;
