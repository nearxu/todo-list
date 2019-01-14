import "babel-polyfill"
import './assets/common.css';
import './assets/reset.scss';
import Icon from './assets/weixin@2x.png'
const sort = (a, b) => a - b
let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);

console.log(arrB.includes(8));
console.log("new Set(arrB) is ", new Set(arrB));