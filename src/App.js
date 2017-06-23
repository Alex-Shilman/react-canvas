import React, { Component } from 'react';
import Canvas from './Puma';
import CanvasWrapper from './Puma/CanvasHOC';
import './App.css';


const WrappedPuma = CanvasWrapper('AL_L10_08_001', Canvas);
const dimentions = {width:280, height:192};

class App extends Component {
  state = {
    drawPuma:true,
    buttonVisibility:false
  }

  showButton = (flag = false) => {
    this.setState({buttonVisibility: flag, drawPuma: false});
  }

  render() {
    const { drawPuma, toggle, buttonVisibility } = this.state;
    debugger;
    return (
      <div className="App">
          <WrappedPuma 
              {...dimentions}
              updateButtonVisibility={this.showButton}
              draw={drawPuma}
          />
        <section className="actions">
          {
            (buttonVisibility)
              && <button
                  className="fire_action"
                  onClick={() => {this.setState({buttonVisibility: false, drawPuma: true})}}>
                  Jump Puma
                </button>
          }
        </section>

      </div>
    );
  }
}

export default App;
