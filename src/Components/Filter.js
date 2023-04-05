import React, { useState } from 'react';

function Filter({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handlePosterURLChange = event => {
    setPosterURL(event.target.value);
  };

  const handleRatingChange = event => {
    setRating(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newMovie = { title, description, posterURL, rating };
    onAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <form className="filter">
      <h3>Add a new movie</h3>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="posterURL">Poster URL:</label>
        <input
          type="text"
          id="posterURL"
          value={posterURL}
          onChange={handlePosterURLChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input      type="number"
      id="rating"
      value={rating}
      onChange={handleRatingChange}
    />
  </div>
  <button type="submit" onClick={handleSubmit}>
    Add movie
  </button>
</form>
);
}
export default Filter;