import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filter from './Filter';
import Order from 'Components/Order';
import Itens from 'Components/Itens';
import stylesTema from '../../styles/Theme.module.scss';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <>
      <section className={styles.cardapio}>
        <h3 className={stylesTema.titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filter filtro={filtro} setFiltro={setFiltro}/>
          <Order ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
      </section>
    </>
  );
}