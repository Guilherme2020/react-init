

import React from 'react';

import PlacarContainer from './PlacarContainer';


  const dados = {
      partida: {
        estadio: "Maracanã/Rj",
        data: "02/06/2017",
        horario: "12"
      },
      casa: {
          nome: "Vasco",
      },
      visitante:{
          nome: "Fluminense",
      }
  };
  export default  class App extends React.Component {

      render(){
          return <PlacarContainer {...dados}/>;


      }
}
