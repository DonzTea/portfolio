import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Services.module.css';
import { selectTheme } from '../../redux/reducers/theme';
import webIcon from '../../assets/icons/web-development.svg';
import backendIcon from '../../assets/icons/backend.svg';
import mobileIcon from '../../assets/icons/mobile-development.svg';

export default function Services() {
  const isDarkMode = useSelector(selectTheme);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}>
      <div id="services" className={styles.center}>
        <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''}`}>
          <b>Services</b>
        </h2>
      </div>

      <div className={styles['box-container']}>
        <div
          className={`${styles['box-background']} ${
            isDarkMode ? styles.dark : ''
          }`}
        />
        <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`}>
          <img src={webIcon} alt="web development" className={styles.icon} />
          <h3>Web Development</h3>
          <p className={isDarkMode ? styles.dark : ''}>
            Web development is crucial since it affects how your audience
            perceives your brand. You can either make an impression on them to
            stay on your page and learn about your business or leave your page
            and turn to a competitor.
          </p>
        </div>

        <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`}>
          <img src={backendIcon} alt="backend" className={styles.icon} />
          <h3>Scripting & Backend Stuff</h3>
          <p className={isDarkMode ? styles.dark : ''}>
            Integrating server, container, application, and database communicate
            with each other. Building a product that works seamlessly, meet your
            business needs and creating an enjoyable user experience that earns
            your clients loyalty.
          </p>
        </div>

        <div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`}>
          <img
            src={mobileIcon}
            alt="mobile development"
            className={styles.icon}
          />
          <h3>Mobile Development</h3>
          <p className={isDarkMode ? styles.dark : ''}>
            A mobile-first approach is imperative for successful businesses.
            Mobile apps allow you to foster the customer relationship and
            increase retention. Without a mobile presence, significant marketing
            opportunities are missed.
          </p>
        </div>
      </div>
    </div>
  );
}
