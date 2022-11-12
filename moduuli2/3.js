'use strict';
const koirat = [];
for(let i = 1; i <= 6; i++){
  koirat.push(prompt(`Syötä ${i}. koiran nimi`));
}
koirat.sort();
koirat.reverse();
for(let koira of koirat){
  document.getElementById('target').innerHTML += `<li>${koira}</li>`;
}