'use strict';

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li1.textContent = 'First item';
li2.textContent = 'Second item';
li3.textContent = 'Third item';

li2.classList.add("my-item");

document.getElementById('target').appendChild(li1);
document.getElementById('target').appendChild(li2);
document.getElementById('target').appendChild(li3);
