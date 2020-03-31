import { GET_KEYWORD, GET_RATING, ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from '../Actions/Types';
import uuid from 'uuid/v4';

const init = [
    {
        id: uuid(),
        name: 'FATE / STAY NIGHT',
        image: 'https://adala-news.fr/wp-content/uploads/2019/10/FateStay-Night-Heavens-Feel-III-Spring-Song.jpg',
        year: '2020',
        rating: 4,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: uuid(),
        name: 'DIGIMON ADVENTURES',
        image: 'https://adala-news.fr/wp-content/uploads/2019/12/Digimon-Adventure-Last-Evolution-Kizuna-anime-image.png',
        year: '2020',
        rating: 3,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    },
    {
        id: uuid(),
        name: 'ONE PIECE: Stampede',
        image: 'https://images-na.ssl-images-amazon.com/images/I/814qK7i8mtL._SL1000_.jpg',
        year: '2019',
        rating: 5,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    },
    {
        id: uuid(),
        name: 'CODE GEASS',
        image: 'https://fr.web.img4.acsta.net/pictures/18/12/03/11/12/0492199.jpg',
        year: '2019',
        rating: 4,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    }, 
    {
        id: uuid(),
        name: 'KONOSUBA',
        image: 'https://www.nautiljon.com/images/more/01/32/124723.jpg',
        year: '2019',
        rating: 3,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    },  
    {
        id: uuid(),
        name: 'BUNGOU STRAY DOGS',
        image: 'https://www.nautiljon.com/images/anime/00/81/bungou_stray_dogs_-_dead_apple_6618.jpg',
        year: '2018',
        rating: 2,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    },  
    {
        id: uuid(),
        name: 'DRAGON BALL SUPER',
        image: 'https://fr.web.img3.acsta.net/pictures/19/02/22/16/14/0019120.jpg',
        year: '2018',
        rating: 4,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    },  
    {
        id: uuid(),
        name: 'MIRAI',
        image: 'https://www.actualitte.com/images/facebook/1513151745625-image-5ad6032845f44.jpg',
        year: '2018',
        rating: 1,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    },   
];

const MovieReducer = (state={movies: init, keyword:'', rating:0}, action) => {
    switch (action.type) {
        case GET_KEYWORD:
            return { ...state, keyword: action.payload };
        case GET_RATING:
            return { ...state, rating: action.payload };
        case ADD_MOVIE:
            return { ...state, movies: state.movies.concat(action.payload ) };
        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter( el => el.id !== action.payload ) };
        case EDIT_MOVIE:
            return { ...state, movies: state.movies.map( el => el.id === action.payload.id ? { ...el, ...action.payload.updatedMovie} : el ) };
        default:
            return state
    }
}

export default MovieReducer;