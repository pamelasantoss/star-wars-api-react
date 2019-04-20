import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../images/star-wars-logo.png';
import Loading from '../loading.js';
import Erro from '../error-page.js';
import Card from '../card';

class Inicio extends Component {
  state = {
    termo: '',
    loading: false,
    erro: false,
    dados: null,
    imagem: require(`../../images/default.jpg`),
    homeworld: null
  }

  handleChange(event) {
    this.setState({
      termo: event.target.value
    });
  }

  buscaEnter(event) {
    if(event.key === 'Enter') {
      this.botaoBuscar(event);
    }
  }

  botaoBuscar(event) {
    event.preventDefault();

    const { termo } = this.state;

    this.setState({
      loading: true
    })

    axios.get(`https://swapi.co/api/people/?search=${termo}`)
      .then((response) => {
        this.setState({
          dados: response.data.results[0],
        })

        // Colocando página de erro caso termo não seja encontrado
        if (this.state.dados === undefined) {
          this.setState({
            erro: true,
            loading: false
          })
        } else {
          // Buscando a homeworld
          axios.get(this.state.dados.homeworld)
            .then((res) => {
              this.setState({
                homeworld: res.data,
                loading: false
              })
            })
            .catch((error) => {
              console.log(error)
            })

          // Alterando a imagem de acordo com o termo buscado
          if (this.state.termo.indexOf(this.state.dados.name) === -1) {
            this.setState({
              imagem: require(`../../images/${this.state.termo}.jpg`)
            })
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { loading, erro, dados, imagem, homeworld } = this.state;

    if (loading) {
      return (
        <Loading />
      )
    }

    if (erro) {
      return (
        <Erro />
      )
    }

    if (dados && homeworld) {
      return (
        <Card imagem={imagem} dados={this.state.dados} homeworld={this.state.homeworld} />
      )
    }

    return (
      <div>
        <section className="logo">
          <img src={logo} alt="Star Wars" />
        </section>
        <section className="search">
          <input type="text" name="termo" value={this.state.termo} onChange={this.handleChange.bind(this)} onKeyPress={this.buscaEnter.bind(this)} />
          <button onClick={this.botaoBuscar.bind(this)}>Search</button>
        </section>
      </div>
    )
  }
}

export default Inicio;