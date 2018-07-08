import React, { Component } from 'react';
import Canvas from './components/Canvas';
import Engine from './components/Engine'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      setting: {
        
      }
    }
    React.initializeTouchEvents(true)
  }
  onChangeSetting(setting) {
    this.setState({ setting: setting }, () => {
      this.refs.canvas.reset();
    })
  }
  render() {
    return (
      <div className="App">
        <Canvas ref="canvas" setting={this.state.setting} />
        <Engine setting={this.state.setting} onChangeSetting={this.onChangeSetting.bind(this)} />
      </div>
    );
  }
}
