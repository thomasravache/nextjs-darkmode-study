import React from 'react';
import Link from 'next/link';

import { navContainer, navSubContainer, navLink } from './Navigation.module.css';
// ou import styles from './Navigation.module.css' --> aí eu usaria styles.navContainer e etc....

const Navigation = () => {
  return (
    <div className={ navContainer }>
      <div className={ navSubContainer }>
        <Link href="/">
          <a className={ navLink }>
            Your Name
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;