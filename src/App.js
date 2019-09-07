import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Card from './Componentes/Card';
import axios from 'axios';
import mongoose from "mongoose";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      listAuthors:[]
    }
  }

  componentDidMount(){
    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
      .then(authors => {
        this.setState({
          listAuthors:authors.data
        })
      }).catch(err => console.log(err))
  }

  renderCards = () => {
    if (this.state.listAuthors.length === 0){
      return <h1>Cargando....</h1>
    }else{
      const cardListAuthors = this.state.listAuthors.map(author => {
        return <Card nombre={author.name} bio={author.biography} age={author.age}/>
      });
      return cardListAuthors;
    }
  }

  render() {
    return (
      <div>
        <div className="row ml-5">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default App;