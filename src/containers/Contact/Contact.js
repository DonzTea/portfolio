import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducers/theme';
import styles from './Contact.module.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const isDarkMode = useSelector(selectTheme);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}>
      <div id="contact" className={styles.center}>
        <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''}`}>
          <b>Contact</b>
        </h2>
      </div>

      <p className={`${styles.description} ${isDarkMode ? styles.dark : ''}`}>
        Let me know if you want to talk about a potential collaboration. I'm
        available for either remote or onsite work.
      </p>

      <form autoComplete="off">
        <div className={styles['form-group']}>
          <label
            htmlFor="email"
            className={`${styles.label} ${
              email.length > 0 ? styles.active : ''
            }`}
          >
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            spellCheck="false"
            className={`${styles.input} ${isDarkMode ? styles.dark : ''}`}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
            }}
          />
        </div>

        <div className={styles['form-group']}>
          <label
            htmlFor="subject"
            className={`${styles.label} ${
              subject.length > 0 ? styles.active : ''
            }`}
          >
            Your Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            spellCheck="false"
            className={`${styles.input} ${isDarkMode ? styles.dark : ''}`}
            onChange={(e) => {
              const value = e.target.value;
              setSubject(value);
            }}
          />
        </div>

        <div className={styles['form-group']}>
          <label
            htmlFor="message"
            className={`${styles.label} ${
              message.length > 0 ? styles.active : ''
            }`}
          >
            Your Message
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            spellCheck="false"
            className={`${styles.input} ${isDarkMode ? styles.dark : ''}`}
            onChange={(e) => {
              const value = e.target.value;
              setMessage(value);
            }}
          />
        </div>

        <div className={styles.center}>
          <a
            onClick={(e) => {
              e.preventDefault();
              console.log('SUBMITTED');
            }}
          >
            <button
              className={`${styles.button} ${isDarkMode ? styles.dark : ''}`}
            >
              SEND
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}
