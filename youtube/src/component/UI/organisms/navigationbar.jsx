import React from 'react';
import Seachbar from '../molecules/seachbar';
import classNames from 'classnames';
import Logo from './../molecules/logo';
import styles from './../../../styles/organisms/navigationbar.module.css';

const Navigationbar = (props) => {
  return (
    <nav className={classNames(styles.nav, props.className)}>
      <Logo className={styles.logo} />
      <Seachbar className={styles.searchbar} />
    </nav>
  );
};

export default Navigationbar;
