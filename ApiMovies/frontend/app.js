// frontend/app.js
const movieListContainer = document.getElementById('movieList');

fetch('/movies')
  .then(response => response.json())
  .then(movies => {
    movies.forEach(movie => {
      const movieItem = document.createElement('div');
      movieItem.classList.add('movie-item');
      movieItem.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
      `;
      movieListContainer.appendChild(movieItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
