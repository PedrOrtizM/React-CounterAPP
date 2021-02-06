import React from 'react'

import ReactDOM from 'react-dom'
import CounterApp from './CounterApp';
// import FirstApp from './FirstApp';
import './index.css'

const divRoot = document.querySelector('#root');

console.log(divRoot);
// ReactDOM.render(<FirstApp nombre="Pedro" edad={25} />, divRoot);
ReactDOM.render(<CounterApp value = { 0 } />, divRoot);