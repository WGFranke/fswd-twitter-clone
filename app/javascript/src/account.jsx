// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Feeds from './feeds';

const Account = () => (
  <Feeds>
    <h1>Account Page</h1>
  </Feeds>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Account />,
    document.body.appendChild(document.createElement('div')),
  )
})