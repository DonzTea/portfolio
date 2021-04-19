import { configureStore } from '@reduxjs/toolkit';
import overlayReducer from '../redux/reducers/overlay';
import sidebarReducer from '../redux/reducers/sidebar';
import themeReducer from '../redux/reducers/theme';
import languageReducer from '../redux/reducers/language';

export default configureStore({
  reducer: {
    overlay: overlayReducer,
    sidebar: sidebarReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});
