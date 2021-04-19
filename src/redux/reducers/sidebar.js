import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    value: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.value = !state.value;
    },
    closeSidebar: (state, action) => {
      state.value = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;

export const selectSidebar = (state) => state.sidebar.value;

export default sidebarSlice.reducer;
