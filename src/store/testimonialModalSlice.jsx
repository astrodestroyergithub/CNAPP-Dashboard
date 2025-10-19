import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  image: '',
  text: '',
  filledStars: 0,
}

const testimonialModalSlice = createSlice({
  name: 'testimonialModal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { image, text, filledStars } = action.payload;
      state.isOpen = true;
      state.image = image;
      state.text = text;
      state.filledStars = filledStars;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.image = '';
      state.text = '';
      state.filledStars = 0;
    },
  },
})

export const { openModal, closeModal } = testimonialModalSlice.actions

export default testimonialModalSlice.reducer
