import React, { Component } from 'react';
import Filmes from './filmes.js';
import Especies from './especies.js';
import Veiculos from './veiculos.js';
import Naves from './naves.js';
import Voltar from '../voltar-button.js';

class card extends Component {
  render() {
    const { imagem, dados, homeworld } = this.props;

    return (
      <div className="card">
        <div className="foto">
          <img src={imagem} alt={dados.name} />
        </div>

        <div className="titulo">
          <h1>{dados.name}</h1>
        </div>

        <div className="informacoes">
          <div className="col-esq">
            <h2>General information</h2>

            <h3>Birth year</h3>
            <p>{dados.birth_year}</p>

            <h3>Height</h3>
            <p>{dados.height}</p>

            <h3>Skin color</h3>
            <p>{dados.skin_color}</p>

            <h3>Eye color</h3>
            <p>{dados.eye_color}</p>

            <h3>Hair color</h3>
            <p>{dados.hair_color}</p>
          </div>

          <div className="col-dir">
            <h2>More information</h2>

            <h3>Homeworld</h3>
            <p>{homeworld.name}</p>

            <h3>Films</h3>
            <ul>
              <Filmes dados={dados} />
            </ul>

            <h3>Species</h3>
            <ul>
              <Especies dados={dados} />
            </ul>

            { dados.vehicles.length > 0 ? <Veiculos dados={dados} /> : null }

            { dados.starships.length > 0 ? <Naves dados={dados} /> : null }
          </div>
        </div>

        <div className="bt-voltar">
          <Voltar />
        </div>
      </div>
    )
  }
}

export default card;