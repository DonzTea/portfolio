import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducers/theme';
import styles from './CurriculumVitae.module.css';

export default function CurriculumVitae() {
  const isDarkMode = useSelector(selectTheme);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}>
      <div id="cv" className={styles.center}>
        <h2 className={`${styles.title} ${isDarkMode ? styles.dark : ''}`}>
          <b>Curriculum Vitae</b>
        </h2>
      </div>

      <div className={styles.content}>
        <div>
          <h3 className={`${styles.subtitle} ${isDarkMode ? styles.dark : ''}`}>
            Work Background
          </h3>

          <div className={styles.subsection}>
            <h4
              className={`${styles.subsubtitle} ${
                isDarkMode ? styles.dark : ''
              }`}
            >
              PT. Kreasi Digital Indo Utama
            </h4>
            <h5 className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}>
              Backend Developer
            </h5>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              January 2021 - Now
            </p>
          </div>

          <div className={styles.subsection}>
            <h4
              className={`${styles.subsubtitle} ${
                isDarkMode ? styles.dark : ''
              }`}
            >
              Bappppeda Sumedang
            </h4>

            <div className={styles.row}>
              <div className={styles.col}>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  Web Developer
                </h5>
              </div>
              <div>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  <span style={{ color: '#ff0000' }}>* </span>
                  Freelancing
                </h5>
              </div>
            </div>

            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              January 2021
            </p>
          </div>

          <div className={styles.subsection}>
            <h4
              className={`${styles.subsubtitle} ${
                isDarkMode ? styles.dark : ''
              }`}
            >
              PT. Kreasi Digital Indo Utama
            </h4>

            <div className={styles.row}>
              <div className={styles.col}>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  Fullstack Developer
                </h5>
              </div>
              <div>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  <span style={{ color: '#ff0000' }}>* </span>
                  Internship
                </h5>
              </div>
            </div>

            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              October 2020 - December 2020
            </p>
          </div>
        </div>

        <div>
          <h3 className={`${styles.subtitle} ${isDarkMode ? styles.dark : ''}`}>
            Skills
          </h3>

          <div className={styles.subsection}>
            <div className={styles.row}>
              <div className={styles.col}>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  Frontend Development
                </h5>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  HTML
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  CSS
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  JavaScript
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  Bootstrap
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  React.js
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  Flutter
                </p>
              </div>
              <div className={styles.col}>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  Backend Development
                </h5>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  Node.js
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  Express.js
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  PostgreSQL
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  MySQL
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  MongoDB
                </p>
                <p
                  className={`${styles.detail} ${
                    isDarkMode ? styles.dark : ''
                  }`}
                >
                  Firebase
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className={`${styles.subtitle} ${isDarkMode ? styles.dark : ''}`}>
            Tools
          </h3>
          <div className={styles.subsection}>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              Visual Studio Code
            </p>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              Postman
            </p>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              Git
            </p>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              Docker
            </p>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              DBeaver
            </p>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              MongoDB Compass
            </p>
          </div>
        </div>

        <div>
          <h3 className={`${styles.subtitle} ${isDarkMode ? styles.dark : ''}`}>
            Education
          </h3>

          <div className={styles.subsection}>
            <h4
              className={`${styles.subsubtitle} ${
                isDarkMode ? styles.dark : ''
              }`}
            >
              Universitas Komputer Indonesia
            </h4>

            <div className={styles.row}>
              <div className={styles.col}>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  Informatics Engineering
                </h5>
              </div>
              <div>
                <h5
                  className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}
                >
                  <span style={{ color: '#ff0000' }}>* </span>
                  3.61 GPA
                </h5>
              </div>
            </div>

            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              2016 - 2020
            </p>
          </div>
        </div>

        <div>
          <h3 className={`${styles.subtitle} ${isDarkMode ? styles.dark : ''}`}>
            Courses
          </h3>

          <div className={styles.subsection}>
            <h4
              className={`${styles.subsubtitle} ${
                isDarkMode ? styles.dark : ''
              }`}
            >
              Geek Portal Training
            </h4>
            <h5 className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}>
              Collaborative Coding Bootcamp
            </h5>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              September 2020 - October 2020
            </p>
          </div>

          <div className={styles.subsection}>
            <h4
              className={`${styles.subsubtitle} ${
                isDarkMode ? styles.dark : ''
              }`}
            >
              UML and Object-Oriented Design Foundations
            </h4>
            <h5 className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}>
              Udemy Online Course
            </h5>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              2020
            </p>
          </div>

          <div className={styles.subsection}>
            <h4
              className={`${styles.subsubtitle} ${
                isDarkMode ? styles.dark : ''
              }`}
            >
              Part Time Web Programmer Codepolitan
            </h4>
            <h5 className={`${styles.info} ${isDarkMode ? styles.dark : ''}`}>
              Introduction to Web Development
            </h5>
            <p className={`${styles.detail} ${isDarkMode ? styles.dark : ''}`}>
              August 2018 - November 2018
            </p>
          </div>
        </div>
      </div>

      <div className={styles['spot-container']}>
        <div
          className={`
            ${styles.spot} 
            ${styles['spot-solid']} 
            ${isDarkMode ? styles.dark : ''} 
            ${styles['spot-bottom-right']}
          `}
        />
        <div
          className={`
            ${styles.spot} 
            ${styles['spot-outline']} 
            ${isDarkMode ? styles.dark : ''} 
            ${styles['spot-bottom-right']}
          `}
        />
      </div>
    </div>
  );
}
