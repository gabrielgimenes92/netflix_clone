import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.navBar}>
        <h1 className={styles.logo}>Netflix</h1>
        <div className={styles.navigationButtons}>
          <ul className={styles.categories}>
            <li>início</li>
            <li>séries</li>
            <li>filmes</li>
            <li>bombando</li>
            <li>minha lista</li>
            <li>navegar por idiomas</li>
          </ul>
          <ul className={styles.profileBar}>
            <li>busca</li>
            <li>notificações</li>
            <li>perfil</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
