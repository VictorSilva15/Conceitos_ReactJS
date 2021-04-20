import React, { Component } from "react";

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passo: props.passo || 1,
      valor: props.valor || 0,
    };
  }

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h4>
          Passo:{" "}
          {
            <input
              type="number"
              value={this.state.passo}
              onChange={(e) => this.setState({ passo: +e.target.value })}
            />
          }
        </h4>
        <h4>
          Valor:{" "}
          {
            <input
              type="number"
              value={this.state.valor}
              onChange={(e) => this.setState({ valor: +e.target.value })}
            />
          }
        </h4>
        <h4>Resultado: {this.state.valor}</h4>

        <div>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
      </div>
    );
  }
}
