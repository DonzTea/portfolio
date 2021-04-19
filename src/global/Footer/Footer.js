import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducers/theme';
import styles from './Footer.module.css';
import envelopIcon from '../../assets/icons/envelope.svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import githubIcon from '../../assets/icons/github.svg';

export default function Footer() {
  const isDarkMode = useSelector(selectTheme);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles['social-box']}>
        <img
          src={linkedInIcon}
          alt="linkedin profile"
          className={`${styles.social} ${isDarkMode ? styles.dark : ''}`}
        />
        <img
          src={facebookIcon}
          alt="facebook profile"
          className={`${styles.social} ${isDarkMode ? styles.dark : ''}`}
        />
        <img
          src={githubIcon}
          alt="github profile"
          className={`${styles.social} ${isDarkMode ? styles.dark : ''}`}
        />
      </div>
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
    </div>
  );
}
