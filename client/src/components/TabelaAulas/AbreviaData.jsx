'use strict';

function AbreviaData(data){
    const hora_aula = new Date |(data);
    return hora_aula.tolocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit'});
}

export default AbreviaData;