import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import cn from 'classnames';
const Header = () => {
  const headerItem = cn(styles.header__item, styles.headerButton);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__section}>
          <div className={headerItem}>
            <Link href={'/'}>
              <a>
                <h5>Home</h5>
              </a>
            </Link>
          </div>
          <div className={headerItem}>
            <Link href={'/aboutUs'}>
              <a>
                <h5>About Us</h5>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.header__section}>
          <div className={headerItem}>
            <Link href={'/signup'}>
              <a>
                <h5>Register</h5>
              </a>
            </Link>
          </div>
          <div className={headerItem}>
            <Link href={'/signin'}>
              <a>
                <h5>Login</h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
