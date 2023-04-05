import './App.css';
import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import Navbar from './navbar';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL:
        'https://images-na.ssl-images-amazon.com/images/I/81nwnHTcV3L._AC_SY741_.jpg',
      rating: 9.3,
    },
    {
      title: 'The Godfather',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL:
        'https://images-na.ssl-images-amazon.com/images/I/71t7zBtgyTL._AC_SY741_.jpg',
      rating: 9.2,
    },
    {
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL:
        'https://images-na.ssl-images-amazon.com/images/I/81iAxd%2B1WwL._AC_SY741_.jpg',
      rating: 9.0,
    },
  ]);

  const handleAddMovie = newMovie => {
    setMovies([...movies, newMovie]);
  };

  return (
    <>
    <Navbar/>
    <div className="App">
      <MovieList movies={movies}/>
    </div>
    <Filter onAddMovie={handleAddMovie} />
    </>
  );
}

export default App;
/*
Create the following components:
MovieCard
MovieList
Filter ( title, rate)
Every movie should have the following attributes: title, 
description, posterURL, rating
The user should be:
Able to add a new movie.
Filter the movies with title/rating.
*/