import React, { Component } from 'react';
import styles from './Navlinks.module.css';
import scrollTo from '../../../../utils/scroller';

export default class Navlinks extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.navlinks}>
          <li className={styles.navlink}>
            <a onClick={(e) => scrollTo('#about')}>About</a>
          </li>
          <li className={styles.navlink}>
            <a onClick={(e) => scrollTo('#services')}>Services</a>
          </li>
          <li className={styles.navlink}>
            <a onClick={(e) => scrollTo('#works')}>Works</a>
          </li>
          <li className={styles.navlink}>
            <a onClick={(e) => scrollTo('#cv')}>CV</a>
          </li>
          <li className={styles.navlink}>
            <a onClick={(e) => scrollTo('#contact')}>Portfolio</a>
          </li>
          <li className={styles.navlink}>
            <a onClick={(e) => scrollTo('#contact')}>Blog</a>
          </li>
          <li className={styles.navlink}>
            <a onClick={(e) => scrollTo('#contact')}>Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}
