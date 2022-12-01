'use strict';
const lomake = document.querySelector('form');
const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

async function fetchJson(url, options = {}) {
  const vastaus = await fetch(url, options);
  if (!vastaus.ok) {
    throw new Error(vastaus.statusText);
  }
  return await vastaus.json();
}

lomake.addEventListener('submit', async function(evt) {
  try {
    evt.preventDefault();
    document.querySelector('#movies').innerText = null;

    const hakusana = document.querySelector('#query').value;
    const sarjat = await fetchJson(apiUrl + hakusana);
    console.log(sarjat);

    for (let sarja of sarjat) {
      const title = document.createElement('h2');
      const url = document.createElement('a');
      const modal = document.createElement('dialog');
      const image = document.createElement('img');
      const genres = document.createElement('p');
      const summary = document.createElement('p');

      title.innerText = sarja.show.name;
      document.querySelector('#movies').appendChild(title);
      url.href = sarja.show.url;
      url.innerText = sarja.show.url;
      url.target = '_blank';
      document.querySelector('#movies').appendChild(url);

      url.addEventListener('click', function(evt) {
        modal.innerHTML += `<iframe src = ${sarja.show.url} width="1000" height="500">`;
        evt.preventDefault();
        modal.showModal();
      });

      modal.addEventListener('click', function(evt) {
        evt.preventDefault();
        modal.close();
      });
      document.querySelector('#movies').appendChild(modal);

      if (sarja.show.image == null) {
        image.src = 'https://via.placeholder.com/210x290?text=no+image';
      } else {
        image.src = sarja.show.image.medium;
        image.alt = 'movie_image';
      }
      document.querySelector('#movies').appendChild(image);

      for (let genre of sarja.show.genres) {
        genres.innerText += `| ${genre} `;
      }
      genres.innerText += '|';

      document.querySelector('#movies').appendChild(genres);

      summary.innerHTML = sarja.show.summary;
      document.querySelector('#movies').appendChild(summary);
    }

  } catch (e) {
    console.error(e.message);
  }
});
