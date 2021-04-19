import { createSlice } from '@reduxjs/toolkit';

// store applied theme to local storage
const storeTheme = (isDarkMode) => {
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      storeTheme(state.darkMode);
    },
    setTheme: (state, action) => {
      const theme = action.payload; // 'dark' || 'light'
      state.darkMode = theme.toLowerCase() === 'dark';
      storeTheme(state.darkMode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const toggleThemeAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(toggleTheme());
  }, 1000);
};

export const selectTheme = (state) => state.theme.darkMode;

export default themeSlice.reducer;
