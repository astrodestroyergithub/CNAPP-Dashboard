import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  name: '',
  image: '',
  text: '',
  tags: [],
  socials: [],
  filledStars: 0,
}

const testimonialModalSlice = createSlice({
  name: 'testimonialModal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { name, image, text, tags, socials, filledStars } = action.payload;
      state.isOpen = true;
      state.name = name;
      state.image = image;
      state.text = text;
      state.tags = tags;
      state.socials = socials;
      state.filledStars = filledStars;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.name = '';
      state.image = '';
      state.text = '';
      state.tags = [];
      state.socials = [];
      state.filledStars = 0;
    },
  },
})

export const { openModal, closeModal } = testimonialModalSlice.actions

export default testimonialModalSlice.reducer
