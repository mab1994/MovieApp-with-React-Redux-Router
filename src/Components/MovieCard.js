import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Button } from 'react-bootstrap';
import NewMovieModal from './NewMovieModal';
import { connect } from "react-redux";
import { deleteMovie } from '../Actions/Actions';
import { Link } from "react-router-dom";

const MovieCard = ({ movie, delMovie }) => {
  return (
    <div>
      <div className='movie-card'>
        <div className='movie-rate'>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={movie.rating}
          />
        </div>
        <img src={movie.image} alt='' />
        <div>
         <p className='name'> {movie.name} </p><p className='year'> {movie.year} </p>
        </div>
      </div>
      <div>
        <Button variant='outline-danger' onClick={() => delMovie(movie.id)}>Remove</Button>
        <Link to={`/movie/${movie.id}`}>
          <Button variant='outline-dark'>Description</Button>
        </Link>
        <NewMovieModal editMode={true} movieToEdit={movie} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    delMovie: id => dispatch(deleteMovie(id))
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);