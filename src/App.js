import React, { Component } from 'react';
import Canvas from './Puma';
import CanvasWrapper from './Puma/CanvasHOC';
import './App.css';


const WrappedPuma = CanvasWrapper('AL_L10_08_001', Canvas);
const WrappedGraph = CanvasWrapper('AL_L10_08_001_Graph', Canvas);
const dimentions = {width:280, height:192};

class App extends Component {
  state = {
    drawPuma:false,
    toggle: 0
  }
  render() {
    const { drawPuma, toggle } = this.state;
    debugger;
    return (
      <div className="App">
        <section style={{position:'relative'}}>
          <WrappedGraph  {...dimentions} draw={true}/>
          <WrappedPuma {...dimentions} draw={this.state.drawPuma}/>
        </section>
      <button
        className="fire_action"
        onClick={() => {this.setState({drawPuma:true, toggle: toggle ^ 1})}}>
          Jump Puma
      </button>
      </div>
    );
  }
}

export default App;
