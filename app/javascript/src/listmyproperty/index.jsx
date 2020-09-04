import React from 'react';
import ReactDOM from 'react-dom';
import Listmyproperty from './listmyproperty';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Listmyproperty />,
    document.body.appendChild(document.createElement('div')),
  )
})
