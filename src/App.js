import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import "./App.css"

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A science fiction film where dreams become reality.',
      posterURL: 'https://tse3.mm.bing.net/th?id=OIP.M3SUgPuQf_FBkMOgUTM62QHaLj&pid=Api&P=0&h=180',
      rating: 9,
    },
    {
      title: 'Interstellar',
      description: 'An epic journey through space to save humanity.',
      posterURL: 'https://tse2.mm.bing.net/th?id=OIP.uiaj_IMaC7h3NoieAhcmVwHaLG&pid=Api&P=0&h=180',
      rating: 8.6,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (filters) => {
    const { title, rating } = filters;

    setFilteredMovies(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          (rating ? movie.rating >= parseFloat(rating) : true)
      )
    );
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies || []} />
      <button
        onClick={() =>
          handleAddMovie({
            title: 'New Movie',
            description: 'A new adventure.',
            posterURL: 'https://tse4.mm.bing.net/th?id=OIP.B8xFC68gaU2xNotaimgkegHaKU&pid=Api&P=0&h=180',
            rating: 7,
          })
        }
      >
        Add a Movie
      </button>
    </div>
  );
}

export default App;
