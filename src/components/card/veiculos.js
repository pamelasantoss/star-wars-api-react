import React, { Component } from 'react';
import axios from 'axios';

class veiculos extends Component {
	state = {
		veiculos: null,
		arrayVeiculos: []
	}

	componentDidMount() {
		const { dados } = this.props;

		dados.vehicles.map((vehicle) => {
			axios.get(vehicle)
			    .then((response) => {
			    	this.setState({
			    		veiculos: response.data
			    	})

			    	this.state.arrayVeiculos.push(response.data)
			    })
			    .catch((error) => {
			    	console.log(error)
			    })
		})
	}

	renderVeiculos() {
		const { veiculos, arrayVeiculos } = this.state;

		if(veiculos) {
			const todosVeiculos = [veiculos];
			const buildList = arrayVeiculos.concat(todosVeiculos);

			return (
				buildList.map((veiculo, key) => {
					return (
						<li key={key}>{veiculo.name}</li>
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
			<div>
				<h3>Vehicles</h3>
				<ul>
					{this.renderVeiculos()}
				</ul>
			</div>
		)
	}
}

export default veiculos;