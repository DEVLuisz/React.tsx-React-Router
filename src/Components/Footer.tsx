import styles from './Footer.module.scss';
import { ReactComponent as Logo} from '../assets/logo.svg';

export default function Footer() {

  return(
    <footer className={styles.footer}>
      <span className={styles.footer__luis}>Powered by &copy; Luís.jsx</span>
      <Logo />
    </footer>
  );
}