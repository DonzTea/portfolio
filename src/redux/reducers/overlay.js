import { createSlice } from '@reduxjs/toolkit';

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState: {
    value: false,
  },
  reducers: {
    toggleOverlay: (state, action) => {
      state.value = !state.value;
    },
    closeOverlay: (state, action) => {
      state.value = false;
    },
  },
});

export const { toggleOverlay, closeOverlay } = overlaySlice.actions;

export const selectOverlay = (state) => state.overlay.value;

export default overlaySlice.reducer;
