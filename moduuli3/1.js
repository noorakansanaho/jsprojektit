'use strict';

document.getElementById('target').innerHTML += `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>`

const target = document.getElementById('target');
target.classList.add("my-list");