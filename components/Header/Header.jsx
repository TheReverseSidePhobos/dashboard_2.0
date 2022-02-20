import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import cn from 'classnames';
const Header = () => {
    
    const headerItem = cn(styles.header__item, styles.headerButton);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__section}>
          <div className={headerItem}>Home</div>
          <div className={headerItem}>About</div>
        </div>
        <div className={styles.header__section}>
          <div className={headerItem}>Register</div>
          <div className={headerItem}>Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
