import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducers/theme';
import styles from './Works.module.css';

export default function Works() {
  const isDarkMode = useSelector(selectTheme);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}>
      <div id="works">
        <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''}`}>
          <b>
            <span
              className={`${styles.highlight} ${isDarkMode ? styles.dark : ''}`}
            >
              The work
            </span>{' '}
            I do, and business I help.
          </b>
        </h2>
      </div>

      <div className={styles['image-box']}>
        <div className={styles['image-box-column']}>
          <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`} />
          <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`} />
          <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`} />
        </div>
        <div className={styles['image-box-column']}>
          <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`} />
          <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`} />
        </div>
      </div>
    </div>
  );
}
