import React, { Component } from "react";
import Contador from "./Contador";

class Contadores extends Component {
  state = {
    contadores: [
      { id: 0, titulo: "Alpha", valor: 0 },
      { id: 1, titulo: "Beta", valor: 5 },
      { id: 2, titulo: "Gamma", valor: -10 },
      { id: 3, titulo: "Omega", valor: 0 }
    ]
  };

  // Funcion
  eliminarContador = id => {
    const nuevoContador = this.state.contadores.filter(item => item.id !== id);
    this.setState({ contadores: nuevoContador });
  };

  render() {
    return (
      <React.Fragment>
        {/** INSTANCIAR COMPONENTE CONTADOR
         * Recorrer el array 'state'
         */}
        {this.state.contadores.map(item => {
          return <Contador 
          key={item.id}
          id={item.id}
          titulo={item.titulo} 
          valor={item.valor}
          eliminar={this.eliminarContador}
          >
          </Contador>;
        })}
      </React.Fragment>
    );
  }
}

export default Contadores;
