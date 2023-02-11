'use strict';

//--------------------1-----------------------------
const url = 'https://jsonplaceholder.typicode.com/todos/';
function getData(url) {
  let data =  fetch(url);
  data
    .then((response) => response.json())
    .then((json) => json.filter((item) => item.title[0] === 'a'))
    .then(filtered => console.log(filtered))
    
}

getData(url);
//--------------------2-----------------------------

//--------------------3-----------------------------

//--------------------4-----------------------------
