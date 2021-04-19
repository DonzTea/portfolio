import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ThemePicker.module.css';
import { toggleTheme, selectTheme } from '../../redux/reducers/theme';
import sunIcon from '../../assets/icons/sun.svg';
import moonIcon from '../../assets/icons/moon.svg';

export default function ThemePicker() {
  const isDarkMode = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div className={styles.background} onClick={(e) => dispatch(toggleTheme())}>
      <div
        className={`${styles.circle} ${
          isDarkMode ? styles['dark-mode'] : null
        }`}
      />
      <div className={styles['icon-container']}>
        <img
          className={`${styles.icon} ${styles['moon-icon']}`}
          src={moonIcon}
          alt="dark mode"
        />
        <img className={styles.icon} src={sunIcon} alt="light mode" />
      </div>
    </div>
  );
}
