import React, { Component } from 'react';
import axios from 'axios';

class especies extends Component {
  state = {
    especies: null,
    arrayEspecies: []
  }

  componentDidMount() {
    const { dados } = this.props;

    dados.species.map((specie) => {
      if (specie) {
        axios.get(specie)
          .then((response) => {
            this.setState({
              especies: response.data
            })

            this.state.arrayEspecies.push(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      }

      return null
    })
  }

  renderEspecies() {
    const { especies, arrayEspecies } = this.state;

    if (especies) {
      const todasEspecies = [especies];
      const buildList = arrayEspecies.concat(todasEspecies);

      return (
        buildList.map((especie, key) => {
          return (
            <li key={key}>{especie.name}</li>
          )
        })
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      this.renderEspecies()
    )
  }
}

export default especies;