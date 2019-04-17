import React, { Component } from 'react';
import axios from 'axios';

class naves extends Component {
	state = {
		naves: null,
		arrayNaves: []
	}

	componentDidMount() {
		const { dados } = this.props;

		dados.starships.map((starship) => {
			axios.get(starship)
			    .then((response) => {
			    	this.setState({
			    		naves: response.data
			    	})

			    	this.state.arrayNaves.push(response.data)
			    })
			    .catch((error) => {
			    	console.log(error)
			    })
		})
	}

	renderNaves() {
		const { naves, arrayNaves } = this.state;

		if(naves) {
			const todasNaves = [naves];
			const buildList = arrayNaves.concat(todasNaves);

			return (
				buildList.map((nave, key) => {
					return (
						<li key={key}>{nave.name}</li>
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
				<h3>Starships</h3>
				<ul>
					{this.renderNaves()}
				</ul>
			</div>
		)
	}
}

export default naves;