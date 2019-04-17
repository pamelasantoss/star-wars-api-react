import React, { Component } from 'react';
import Voltar from './voltar-button.js';

class Erro extends Component {
	render() {
		return (
			<div className="error-page">
				<p className="erro-title">404</p>
				<p>Great shot. That was one in a million.</p>
				<Voltar />
	        </div>
		)
	}
}

export default Erro;