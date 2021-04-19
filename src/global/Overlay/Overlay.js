import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Overlay.module.css';

import { selectOverlay, closeOverlay } from '../../redux/reducers/overlay';
import { closeSidebar } from '../../redux/reducers/sidebar';

export default function Overlay() {
  const isOverlayActive = useSelector(selectOverlay);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.overlay} ${isOverlayActive ? styles.active : ''}`}
      onClick={(e) => {
        dispatch(closeOverlay());
        dispatch(closeSidebar());
      }}
    />
  );
}
