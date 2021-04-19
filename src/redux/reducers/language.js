import { createSlice } from '@reduxjs/toolkit';

// store applied language to local storage
const storeLanguage = (lang) => {
  localStorage.setItem('lang', lang);
};

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'en', // en || id
  },
  reducers: {
    setLanguage: (state, action) => {
      const lang = action.payload;
      state.value = lang;
      storeLanguage(lang);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state) => state.language.value;

export default languageSlice.reducer;
