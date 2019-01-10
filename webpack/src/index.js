
// import App from './app';
import App from './vue/index';
import Vue from 'vue';

new Vue({
    el:'#app',
    render:h => h(App)
})
console.log('i am webpack'); 