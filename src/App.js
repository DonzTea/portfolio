import React, { Fragment, useLayoutEffect } from 'react';

import Navbar from './global/Navigation/Navbar/Navbar';
import About from './containers/About/About';
import Works from './containers/Works/Works';
import CurriculumVitae from './containers/CurriculumVitae/CurriculumVitae';
import Services from './containers/Services/Services';
import Contact from './containers/Contact/Contact';
import Footer from './global/Footer/Footer';
import Overlay from './global/Overlay/Overlay';
import Sidebar from './global/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { setTheme } from './redux/reducers/theme';
import { setLanguage } from './redux/reducers/language';

function App() {
  const dispatch = useDispatch();

  const applyTheme = () => {
    const appliedTheme = localStorage.getItem('theme');
    if (appliedTheme) {
      dispatch(setTheme(appliedTheme));
    }
  };

  const applyLanguage = () => {
    const appliedLanguage = localStorage.getItem('lang');
    if (appliedLanguage) {
      dispatch(setLanguage(appliedLanguage));
    }
  };

  useLayoutEffect(() => {
    applyTheme();
    applyLanguage();
  });

  return (
    <Fragment>
      <Navbar />
      <About />
      <Services />
      <Works />
      <CurriculumVitae />
      <Contact />
      <Footer />

      <Overlay />
      <Sidebar />
    </Fragment>
  );
}

export default App;
