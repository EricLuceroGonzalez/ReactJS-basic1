import React, { Component } from "react";
import {Card} from 'reactstrap';
import axios from 'axios';

class ListArticle extends Component {
  state = {
      listAuthors: []
  };

  componentDidMount(){
    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
      .then(authors => {
          console.log(authors);
          
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
        return <Card nombre={author.name} bio={author.biography}/>
      });
      return cardListAuthors;
      //[<Card/>,<Card/>,<Card/>,<Card/>...]
    }
  }
  render() {
    return <React.Fragment>
    <div className="row ml-5">
      {/* {this.state.listCards} */}
      {this.renderCards()}
    </div>
    </React.Fragment>;
  }
}

export default ListArticle;
