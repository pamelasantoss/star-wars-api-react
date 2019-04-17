import React, { Component } from 'react';
import axios from 'axios';

class filmes extends Component {
	state = {
		filmes: null,
		arrayFilmes: []
	}

	componentDidMount() {
		const { dados } = this.props;

		dados.films.map((film) => {
			axios.get(film)
			    .then((response) => {
			    	this.setState({
			    		filmes: response.data
			    	})

			    	this.state.arrayFilmes.push(response.data)
			    })
			    .catch((error) => {
			    	console.log(error)
			    })
		})
	}

	renderFilmes() {
		const { filmes, arrayFilmes } = this.state;

		if(filmes) {
			const todosFilmes = [filmes];
			const buildList = arrayFilmes.concat(todosFilmes);

			return (
				buildList.map((filme, key) => {
					return (
						<li key={key}>{filme.title}</li>
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
			this.renderFilmes()
		)
	}
}

export default filmes;