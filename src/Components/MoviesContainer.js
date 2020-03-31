import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import '../App.css';

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='movie-container'>
        {this.props.AllData.movies.filter(el => el.rating >= this.props.AllData.rating && el.name.toLowerCase().includes(this.props.AllData.keyword.trim().toLowerCase())).map(el => (<MovieCard movie={el} />))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AllData: state.MovieReducer
  };
};

export default connect(mapStateToProps)(MoviesContainer);