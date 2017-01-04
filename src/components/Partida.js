

import React from 'react';



export default class Partida extends React.Component {


  render(){

    return(
        <div>
          <h2>{this.props.estadio}</h2>

          <div>
            <spam>{this.props.data}</spam>
            <spam> - </spam>
            <spam> {this.props.horario}</spam>

          </div>
        </div>
    );
  }

}
