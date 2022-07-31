import classNames from 'classnames';
import { Prato } from 'Types/type';
import styles from '../Components/Item.module.scss';

export default function Tags({ category, size, serving, price}: Prato){
  return (
    <div className={styles.item__tags}>
      <div
        className={classNames({
          [styles.item__tipo]: true,
          [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.item__porcao}>{size}g</div>
      <div className={styles.item__qtdpessoas}>
        Serve {serving} Pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}