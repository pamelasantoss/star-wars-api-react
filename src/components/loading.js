import React, { Component } from 'react';
import loading from '../images/loading.gif';

class Loading extends Component {
  render() {
    return (
      <div className="carregando">
        <img src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Loading;