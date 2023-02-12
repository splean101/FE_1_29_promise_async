'use strict';

//--------------------1-----------------------------
const url = 'https://jsonplaceholder.typicode.com/todos/';
function getData(url) {
  let data = fetch(url);
  data
    .then((response) => response.json())
    .then((json) => json.filter((item) => item.title[0] === 'a'))
    .then((filtered) => console.log(filtered));
}

getData(url);
//--------------------2-----------------------------
async function getAsyncData(url) {
  try {
    let result = await fetch(url);
    if (result.ok) {
      let response = await result.json();
      //console.log(response);
      let filtered = response.filter((item) => item.title[0] === 'a');
      console.log(filtered);
    }
  } catch (err) {
    console.log(err, err.message);
  }
}
getAsyncData(url);
//--------------------3-----------------------------

//--------------------4-----------------------------
