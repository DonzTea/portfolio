import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/reducers/theme';
import styles from './SidebarNav.module.css';
import scrollTo from '../../../utils/scroller';

export default function SidebarNav() {
  const isDarkMode = useSelector(selectTheme);

  return (
    <ul className={styles.container}>
      <li>
        <a
          className={isDarkMode ? styles.dark : ''}
          onClick={(e) => scrollTo('#about')}
        >
          About
        </a>
      </li>
      <li>
        <a
          className={isDarkMode ? styles.dark : ''}
          onClick={(e) => scrollTo('#services')}
        >
          Services
        </a>
      </li>
      <li>
        <a
          className={isDarkMode ? styles.dark : ''}
          onClick={(e) => scrollTo('#works')}
        >
          Works
        </a>
      </li>
      <li>
        <a
          className={isDarkMode ? styles.dark : ''}
          onClick={(e) => scrollTo('#cv')}
        >
          Curriculum Vitae
        </a>
      </li>
      <li>
        <a
          className={isDarkMode ? styles.dark : ''}
          onClick={(e) => scrollTo('#contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
