import React, { Component } from "react";
import { Button } from "reactstrap";

class Contador extends Component {
  state = {
    titulo: this.props.titulo,
    valor: this.props.valor
  };

// componentWillMount(){
//   console.log('componentWillMount');
// }
componentDidMount() {
  console.log('componentDidMount');
}
componentWillUnmount() {
  console.log('componentWillUnmount');
  
}

  incremetarContador = () => {
    console.log("incrementarContador");
    // Modificar el state
    this.setState({
      valor: this.state.valor + 1
    });
  };

  disminuirContador = () => {
    console.log("disminuirContador");
    // Modificar el state
    this.setState({
      valor: this.state.valor - 1
    });
  };


  renderValor = () => {
    if (this.state.valor < 0) {
      return <p style={{ color: "red" }}>{this.state.valor}</p>;
    } else if (this.state.valor === 0) {
      return <p style={{ color: "blue" }}>{this.state.valor}</p>;
    } else {
      return <p style={{ color: "green" }}>{this.state.valor}</p>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container col-md-8 col-8"
          style={{
            fontSize: "2em",
            background: "linear-gradient(180deg, rgba(84,231,153,1) 40%, rgba(55,105,246,1) 100%, rgba(205,42,241,0.7455182756696428) 100%)",
            padding: "20px 12px",
            borderRadius: "14px",
            boxShadow: "2px 6px 10px gray",
            margin: "30px auto"
          }}
        >
          <h2 className="ml-2">Titulo: {this.state.titulo}</h2>
          <div className="row align-items-start ml-2">
            <div className="container" style={{ padding: "1px 4px" }}>
              {this.renderValor()}
            </div>
            <Button
              onClick={this.incremetarContador}
              className="ml-2 mr-2"
              color="primary"
            >
              +
            </Button>
            <Button color="danger" onClick={this.disminuirContador}>
              -
            </Button>
            <Button color="success" className='ml-4' 
            onClick={() => this.props.eliminar(this.props.id)} >
            Eliminar
          </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contador;
