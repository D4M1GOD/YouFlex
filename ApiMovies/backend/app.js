const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/movies', async (req, res) => {
  try {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmFmYWY2ZjVjYTgwMWUwMTdmZDg5OTE0YzViYWViNyIsInN1YiI6IjYwOTAzMWQwODcxYjM0MDA2ZDU0NWNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iD-x5QpZMkTJi9xIxnxFi_tZJyQEqh0wT5qvEm9R_uQ'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    res.json(data.results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});