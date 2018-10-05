import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultados from './components/Resultados';

class App extends Component {

  state = {
    term : '',
    images : [],
    page : ''
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }

  previousPage = () => {
   // leer el state de la página actual
   let page = this.state.page;

   // leeer si la pág es 1, ya no ir hacia atrás
   if(page === 1) return null;

   // sumar uno a la pág actual
   page -= 1;

   // agregar el cambio al state
   this.setState({
     page
   }, () => {
     this.consultApi();
     this.scroll();
   });

   // console.log(page);

  }
  nextPage = () => {
    // leer el state de la página actual
    let page = this.state.page;

    // sumar uno a la pág actual
    page += 1;

    // agregar el cambio al state
    this.setState({
      page
    }, () => {
      this.consultApi();
      this.scroll();
    });

    // console.log(page);

  }

  consultApi = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=10314363-d2cf7cca4dca9f992b73012c9&q=${term}&per_page=30&page=${page}`;

    console.log(url);

    fetch(url)
      .then(response => response.json() )
      .then(result => this.setState({ images : result.hits }) )
  }

  dataSearch = (term) => {
    this.setState({
      term : term,
      page : 1
    }, () => {
      this.consultApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            Buscador de imágenes
          </p>

          <Buscador
            dataSearch={this.dataSearch}
          />
        </div>
        <div className="row justify-content-center">
          <Resultados
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />          
        </div>
      </div>
    );
  }
}

export default App;
