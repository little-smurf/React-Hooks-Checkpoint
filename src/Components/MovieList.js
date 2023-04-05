import React, { useState } from 'react';
import MovieCard from './MovieCard';

function MovieList() {
 const movies = [
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://i.imgur.com/SuW2ZlC.jpg',
      rating: 9.3,
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://i.imgur.com/UaMkVH6.jpg',
      rating: 9.2,
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://i.imgur.com/3jLPB46.jpg',
      rating: 9.0,
    },
  ];
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);

  const handleTitleChange = event => {
    setFilterTitle(event.target.value);
  };

  const handleRateChange = event => {
    setFilterRate(event.target.value);
  };

  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="movie-list">
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={handleTitleChange}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          value={filterRate}
          onChange={handleRateChange}
        />
      </div>
      {filteredMovies.map(movie => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;