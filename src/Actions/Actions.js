import { ADD_MOVIE, DELETE_MOVIE, GET_RATING, GET_KEYWORD, EDIT_MOVIE } from '../Actions/Types';

export const addMovie = movie => {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}

export const getRating = rating => {
    return {
        type: GET_RATING,
        payload: rating
    }
}

export const getKeyword = keyword => {
    return {
        type: GET_KEYWORD,
        payload: keyword
    }
}

export const deleteMovie = id => {
    return {
        type: DELETE_MOVIE,
        payload: id
    }

}

export const editMovie = (id, updatedMovie) => {
    return {
        type: EDIT_MOVIE,
        payload: {id, updatedMovie}
    }
}