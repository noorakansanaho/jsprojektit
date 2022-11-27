'use strict';

const button = document.querySelector('button');
button.addEventListener('click', function() {

  const ope = document.getElementById('operation').value;
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;
  const p = document.querySelector('p');

  let answer;
  switch (ope) {
    case 'add':
      answer = +num1 + +num2;
      break;
    case 'sub':
      answer = num1 - num2;
      break;
    case 'multi':
      answer = num1 * num2;
      break;
    case 'div':
      answer = num1 / num2;
      break;
  }
  p.innerText = answer;
});