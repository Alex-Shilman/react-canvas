/*eslint-disable */
import React, { Component } from 'react';


const Canvas = ({ width, height, canvasRef, draw, ...rest }) => (
  <canvas
    className="Puma"
    ref={canvasRef}
    width={width}
    height={height}
    {...rest}
  />
)

export default Canvas;