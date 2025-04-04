import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Note : {rating}/10</p>
    </div>
  );
}

export default MovieCard;
