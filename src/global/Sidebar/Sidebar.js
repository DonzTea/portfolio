import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.css';

import { selectSidebar } from '../../redux/reducers/sidebar';
import { selectTheme } from '../../redux/reducers/theme';
import ThemePicker from '../ThemePicker/ThemePicker';
import SidebarNav from './SidebarNav/SidebarNav';
import LanguagePicker from '../LanguagePicker/LanguagePicker';

export default function Sidebar() {
  const isSidebarActive = useSelector(selectSidebar);
  const isDarkMode = useSelector(selectTheme);

  return (
    <div
      className={`
      ${styles.container}
      ${isDarkMode ? styles.dark : ''} 
      ${isSidebarActive ? styles.active : ''}
      `}
    >
      <div className={styles.row}>
        <LanguagePicker />
        <ThemePicker />
      </div>

      <SidebarNav />
    </div>
  );
}
