'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let name of names) {
  document.getElementById('target').innerHTML += `<li> ${name} </li>`
}