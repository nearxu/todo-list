import Vue from 'vue';


var bus = new Vue()
bus.$emit('click', 'hello')
bus.$on('click', function (data) {
  console.log(data, 'click')
})