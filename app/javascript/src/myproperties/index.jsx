import React from 'react';
import ReactDOM from 'react-dom';
import Myproperties from './myproperties';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Myproperties />,
    document.body.appendChild(document.createElement('div')),
  )
})
