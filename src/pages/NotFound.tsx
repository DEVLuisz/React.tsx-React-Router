import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage} from '../assets/not_found.svg';
import classNames from 'classnames';
import styleTema from '../styles/Theme.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return(
    <div className={classNames({
      [styles.container]: true,
      [styleTema.container]: true
    })}>
      <div className={styles.voltar} onClick={() => navigate(-1)}>
        <button>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}