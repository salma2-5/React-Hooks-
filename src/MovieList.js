import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (!Array.isArray(movies)) {
    console.error('Expected "movies" to be an array, but received:', movies);
    return <div>No movies available</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
