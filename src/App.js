import React, { Component } from 'react';
import Canvas from './Puma';
import CanvasWrapper from './Puma/CanvasHOC';
import './App.css';


const WrappedPuma = CanvasWrapper('AL_L10_08_001', Canvas);

class App extends Component {
  state = {
    drawPuma:true,
    buttonVisibility:false
  }

  onUpdateState = ({buttonVisibility = false, drawPuma = false}) => {
    this.setState({buttonVisibility, drawPuma});
  }

  render() {
    const { drawPuma, buttonVisibility } = this.state;
    return (
      <div className="App">
          <section className="puma_section">
            <WrappedPuma
              updateState={this.onUpdateState}
              draw={drawPuma}
              isResp={true}
              respDim="both"
              scaleType={1}
              isScale={false}
            />
          </section>
        <section className="actions">
          {
            (buttonVisibility)
            && <button
                className="fire_action"
                onClick={() => {this.onUpdateState({buttonVisibility: false, drawPuma: true})}}>
                Jump Puma
              </button>
          }
        </section>
      </div>
    );
  }
}

export default App;
