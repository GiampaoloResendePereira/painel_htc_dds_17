import React from 'react'

function AbreviaAmbiente(props) {
    const ambiente = props.nomeAmbiente.split(' ');

    if (ambiente.lenght < 2){
        return ambiente
    }
    ambiente.splite()

  return (
    <div>
      
    </div>
  )
}

export default AbreviaAmbiente
