import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'gk',
  initialState: {
    excerpt: "",
    questionNo: null,
    selectedGKsInfo: [],
  },
  reducers: {
    setExcerpt: (state, action) => {
      state.excerpt = action.payload;
    },
    setQuestionNo: (state, action) => {
      state.questionNo = action.payload;
    },
    setSelectedGKsInfo: (state, action) => {
      state.selectedGKsInfo = action.payload;
    },
  }
});

export const { 
  setExcerpt,
  setQuestionNo,
  setSelectedGKsInfo,
} = slice.actions;

export default slice.reducer;
