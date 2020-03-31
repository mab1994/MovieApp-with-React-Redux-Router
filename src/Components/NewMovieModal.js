import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { addMovie, editMovie } from "../Actions/Actions";
import { connect } from "react-redux";
import uuid from "uuid/v4";

class NewMovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: this.props.editMode ? this.props.movieToEdit.name : "",
      year: this.props.editMode ? this.props.movieToEdit.year : "",
      rating: this.props.editMode ? this.props.movieToEdit.rating : "",
      image: this.props.editMode ? this.props.movieToEdit.image : ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    var newMovie = {
      id: uuid(),
      name: this.state.name,
      year: this.state.year,
      image: this.state.image,
      rating: this.state.rating
    };
    this.props.addNewMovie(newMovie);
  };
  editM = () => {
    this.props.EditMovie(this.props.movieToEdit.id, this.state);
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Button variant="link" onClick={this.handleShow}>
          {this.props.editMode ? "Edit Movie" : "Add New Movie"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
              </div>
              <div>
                <label>Image:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="image"
                  value={this.state.image}
                />
              </div>
              <div>
                <label>Rating:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="rating"
                  value={this.state.rating}
                />
              </div>
              <div>
                <label>Year:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="year"
                  value={this.state.year}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={this.props.editMode ? this.editM : this.add}
            >
              {this.props.editMode ? "Edit" : "Add Movie"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(addMovie(newMovie)),
    EditMovie: (id, updatedMovie) => dispatch(editMovie(id, updatedMovie))
  };
};

export default connect(null, mapDispatchToProps)(NewMovieModal);