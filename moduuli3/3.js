'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i=0; i<3; i++) {
  document.getElementById('target').innerHTML += `<li> ${names[i]} </li>`
}