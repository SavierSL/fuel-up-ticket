import React from 'react';
import styles from './NavBar.module.scss';

import FuelUpLogo from '../../../assets/images/logo.png';

const links = [
  { name: 'Course', link: '/course' },
  { name: 'Schedule', link: '/course' },
  { name: 'StudyGroup', link: '/course' },
  { name: 'Tickets', link: '/course' },
  { name: 'Tickets', link: '/course' },
  { name: 'Tickets', link: '/course' },
];

const NavBar = () => {
  return (
    <>
      <div className={styles.NavBar}>
        <div className={styles.NavBarLogo}>
          <img src={FuelUpLogo} alt="" />
        </div>
        <div className={styles.NavBarLinks}>
          <ul>
            {links.map((link) => {
              return <li>{link.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
