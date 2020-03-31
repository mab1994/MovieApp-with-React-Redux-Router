import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterMovies from './Components/FilterMovies';
import MoviesContainer from './Components/MoviesContainer';
import NewMovieModal from './Components/NewMovieModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterMovies />
      <MoviesContainer />
      <NewMovieModal editMode={false} />
    </div>
  );
}

export default App;
