import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage, setLanguage } from '../../redux/reducers/language';
import styles from './LanguagePicker.module.css';
import indonesiaIcon from '../../assets/icons/indonesia.svg';
import englishIcon from '../../assets/icons/united-kingdom.svg';

export default function LanguagePicker() {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles['flags-container']}>
        <img
          src={englishIcon}
          alt="english"
          className={`
            ${styles.icon} 
            ${language === 'en' ? styles.active : ''}
          `}
          onClick={(e) => dispatch(setLanguage('en'))}
        />
        <img
          src={indonesiaIcon}
          alt="indonesian"
          className={`
            ${styles.icon} 
            ${language === 'id' ? styles.active : ''}
          `}
          onClick={(e) => dispatch(setLanguage('id'))}
        />
      </div>
    </div>
  );
}
