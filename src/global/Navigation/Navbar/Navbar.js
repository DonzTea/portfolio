import React from 'react';
import { useSelector } from 'react-redux';

import { selectTheme } from '../../../redux/reducers/theme';

import Toggler from '../Toggler/Toggler';
import Navlinks from './Navlinks/Navlinks';

import envelopIcon from '../../../assets/icons/envelope.svg';

import styles from './Navbar.module.css';

export default function Navbar() {
  const isDarkMode = useSelector(selectTheme);

  return (
    <div
      id="navbar"
      className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}
    >
      <div className={styles['email-box']}>
        <div
          className={`${styles['image-box']} ${
            isDarkMode ? styles.dark : null
          }`}
        >
          <img
            className={isDarkMode ? styles.dark : ''}
            src={envelopIcon}
            alt="email"
          />
        </div>
        <p className={`${styles.email} ${isDarkMode ? styles.dark : ''}`}>
          donirahmatiana@gmail.com
        </p>
      </div>

      <Toggler />

      <Navlinks />
    </div>
  );
}
