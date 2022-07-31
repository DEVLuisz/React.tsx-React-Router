import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import stylesTema from '../styles/Theme.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A Casa do Código e da Massa!
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}
