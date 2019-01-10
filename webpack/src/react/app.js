import "babel-polyfill";
import sum from '../vender/sum'


console.log("1 + 2 =", sum(1, 2));
let func = () => { };
const NUM = 45;
let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);

console.log(arrB.includes(8));
console.log("new Set(arrB) is ", new Set(arrB));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Index from './persets';
export default class App extends Component {
  render() {
    return (
        <div>
        <p>react demo</p>
            <Index />
        </div>
    );
  }
}

ReactDOM.render(<App/> , document.getElementById('app'));