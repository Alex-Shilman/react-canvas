import React from 'react';

const Puma = ({paths, color})  => {
  debugger;
  return (
    <g>{paths.map(path => <path color={color} d={path} />)}</g>
  )
}



export default Puma;