/*eslint-disable */
import React, { Component } from 'react';
import lib from './CanvasLib_2';


const canvasWrapper = (Symbol, WrappedComponent) => {
  return class CanvasWrapper extends Component {

    lastW = 0
    lastH = 0
    lastS = 1
    stage = {}


    componentDidMount(){
      const { draw } = this.props;
      window.addEventListener('resize', (e) => this.handleResize(e));
      draw && this.handleDrawing();
    }

    componentWillUnmount(){
      window.removeEventListener('resize', (e) => this.handleResize(e));
    }

    componentWillReceiveProps(nextProps){
      const { draw } = nextProps;
      draw && this.handleDrawing();
    }

    shouldComponentUpdate(){
      return false;
    }

    handleResize(e){
      this.resizeCanvas()
    }

    resizeCanvas = () => {
      const { isResp, respDim, scaleType, isScale } = this.props;
      const canvas = this.canvas;
      let w = lib.properties.width, h = lib.properties.height;
      let iw = window.innerWidth, ih=window.innerHeight;
      let pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

      if(isResp) {
        if((respDim=='width' && this.lastW==iw) || (respDim=='height' && this.lastH==ih)) {
          sRatio = this.lastS;
        }
        else if(!isScale) {
          if(iw<w || ih<h)
            sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==1) {
          sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      canvas.width = w*pRatio*sRatio;
      canvas.height = h*pRatio*sRatio;
      canvas.style.width = `${w*sRatio}px`;
      canvas.style.height = `${h*sRatio}px`;
      this.stage.scaleX = pRatio*sRatio;
      this.stage.scaleY = pRatio*sRatio;
      this.lastW = iw;
      this.lastH = ih;
      this.lastS = sRatio;
    }

    handleDrawing(){
      const { updateState } = this.props;
      const exportRoot = new lib[Symbol]();
      exportRoot.onAnimationEnd = () =>
        updateState({buttonVisibility:true, drawPuma:false});

      this.stage = new createjs.Stage(this.canvas);
      this.stage.addChild(exportRoot);
      //Registers the "tick" event listener.
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", this.stage);
      //Code to support hidpi screens and responsive scaling.
      this.resizeCanvas();
    }

    render(){
      const { updateState, isResp, respDim, scaleType, isScale, ...rest } = this.props;
      return (
        <WrappedComponent
          canvasRef={(canvasEl) => {this.canvas = canvasEl}}
          {...rest}
        />
      )
    }
  }
}


export default canvasWrapper;