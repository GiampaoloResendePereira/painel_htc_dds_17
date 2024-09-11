import React from 'react';
import Relogio from './Relogio';
import Saudacao from './Saudacao';

import styles from ' ./Cabecalho.module.css'

function Cabecalho() {
  return (
    <div calasseName={styles.cabecalho}>
      <Saudacao />
      <Relogio />
    </div>
  )
}

export default Cabecalho
