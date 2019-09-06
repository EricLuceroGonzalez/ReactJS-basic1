import React, { Component } from 'react';

class Mensaje extends Component {
    state = {
        mensajeA: 'Mensaje A State',
        mensajeB: 'Mensaje B State',
      }
    render() { 
        return (  
            <div>
            <h3> State: {this.state.mensajeA}</h3>
            </div>
        );
    }
}
 
export default Mensaje;