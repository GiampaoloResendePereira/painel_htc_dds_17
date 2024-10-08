import {useEffet, useState} from 'react';
import styles from './Relogio.module.css';

function Relogio() {
  const [hora, setHora] = useState('');

  //useEffct acionado apos carregamento da pagina
  useEffet(()=>{
    atualizaHorario();

    const intervalo = setInterval(atualizaHorario, 1000);

    return () =>{
        clearInterval(intervalo);
    }

  });
 
  function atualizaHorario(){
    //Declarando o objeto do Date
    const agora = new Date();

    //Pegando hora minutos e segundos
    const horaMinutosSegundos = agora.toLocaleTimeString('pt-br',{hour:'2-digit', minute: '2-digit', second:'2-digit'});
    setHora(horaMinutosSegundos);
  }
  return (
    // Chamando constante hora
    <div classeName={styles.relogio}>{hora}</div>
  )
}

export default Relogio;
