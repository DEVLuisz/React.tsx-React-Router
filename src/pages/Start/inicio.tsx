import cardapio from '../../Components/Itens.json';
import styles from './inicio.module.scss';
import stylesTema from '../../styles/Theme.module.scss';
import nossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'Types/type';

export default function Inicio() {

  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function forDetails(prato: Prato){
    navigate(`/prato/${prato.id}`);
  }

  return(
    <section>
      <h3 className={stylesTema.titulo}>
          Recomendações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao} onClick={() => forDetails(item)}>
              Ver Mais!
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='Aluroni House'/>
        <div className={styles.nossaCasa__endereco}>
          Rua All in One, 2906 <br/><br/> Saint Martin - Itália
        </div>
      </div>
    </section>
  );
}