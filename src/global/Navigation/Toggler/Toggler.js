import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectOverlay,
  toggleOverlay,
} from '../../../redux/reducers/overlay.js';
import { toggleSidebar } from '../../../redux/reducers/sidebar';
import { selectTheme } from '../../../redux/reducers/theme';

import styles from './Toggler.module.css';
import menuIcon from '../../../assets/icons/menu.svg';
import closeIcon from '../../../assets/icons/close.svg';

export default function Toggler() {
  const isOverlayActive = useSelector(selectOverlay);
  const isDarkMode = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div
      className={styles.container}
      onClick={(e) => {
        dispatch(toggleOverlay());
        dispatch(toggleSidebar());
      }}
    >
      <img
        src={isOverlayActive ? closeIcon : menuIcon}
        alt="menu"
        className={`
        ${styles['menu-icon']} 
        ${isDarkMode ? styles.dark : ''} 
        ${isOverlayActive ? styles['menu-icon-active'] : ''}
        `}
      />
    </div>
  );
}
