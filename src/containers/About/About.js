import React from 'react';
import { useSelector } from 'react-redux';
import styles from './About.module.css';
import { selectTheme } from '../../redux/reducers/theme';
import smileyIcon from '../../assets/icons/smiley.svg';
import LanguagePicker from '../../global/LanguagePicker/LanguagePicker';
import ThemePicker from '../../global/ThemePicker/ThemePicker';
import scrollTo from '../../utils/scroller';

export default function About() {
  const isDarkMode = useSelector(selectTheme);

  return (
    <div
      id="about"
      className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}
    >
      <div className={styles['theme-picker']}>
        <ThemePicker />
      </div>
      <div className={styles['language-picker']}>
        <LanguagePicker />
      </div>

      <div className={`${styles.avatar} ${isDarkMode ? styles.dark : ''}`} />

      <div className={styles['greeting-container']}>
        <img className={styles.smiley} src={smileyIcon} alt="avatar" />
        <div className={`${styles.greeting} ${isDarkMode ? styles.dark : ''}`}>
          <b>Hi, I'm Doni</b>
        </div>
      </div>

      <h1 className={`${styles.slogan} ${isDarkMode ? styles.dark : ''}`}>
        <b>
          <span
            className={`${styles.highlight} ${isDarkMode ? styles.dark : ''}`}
          >
            Building
          </span>{' '}
          digital products using modern technology.
        </b>
      </h1>

      <p className={`${styles.description} ${isDarkMode ? styles.dark : ''}`}>
        I'am an enthusiastic <b>proffesional software developer</b> with a
        strong passion to create web and mobile applications. I have robust
        problem solving skills and proven experience in creating SaaS based web
        application. I can work as a good team and comfortable working alone.
      </p>
    </div>
  );
}
