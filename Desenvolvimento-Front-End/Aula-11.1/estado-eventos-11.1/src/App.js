import React, { Component } from 'react';

class App extends Component {
  handleClick1() {
    this.setState((estadoAnterior1, _props) => ({
      numeroDelicles1: estadoAnterior1.numeroDelicles1 + 1
    }))
    console.log('clicou')
  }

  handleClick2() {
    this.setState((estadoAnterior2, _props) => ({
      numeroDelicles2: estadoAnterior2.numeroDelicles2 + 1
    }))
    console.log('jagunçou')
  }

  handleClick3() {
    this.setState((estadoAnterior3, _props) => ({
      numeroDelicles3: estadoAnterior3.numeroDelicles3 + 1
    }))
    console.log('esmirilhou')
  }

  constructor() {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    //escrevemos isso para nossa funçaao conseguir enxergar o this
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)

    this.state = {
      numeroDelicles1: 0,
      numeroDelicles2: 0,
      numeroDelicles3: 0
    }

    console.log('bom dia')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.numeroDelicles1}</button>
        <button onClick={this.handleClick2}>{this.state.numeroDelicles2}</button>
        <button onClick={this.handleClick3}>{this.state.numeroDelicles3}</button>
      </div>
    )
  }
}

export default App;