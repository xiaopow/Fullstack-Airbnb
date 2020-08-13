import React from 'react';
import ReactDOM from 'react-dom';
import Mybookings from './mybookings';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Mybookings />,
    document.body.appendChild(document.createElement('div')),
  )
})
