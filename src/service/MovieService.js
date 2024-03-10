import {Movie} from "../model/Movie.js";

export default class MovieService {
    displayAllFilms() {
        try {
            const filmsContainer = document.createElement('div');

            const movies = this.getMovies();
            movies.forEach(movie => {
                const appFilm = document.createElement('app-film');
                appFilm.setAttribute('film', JSON.stringify(movie));

                filmsContainer.appendChild(appFilm);
            });

            document.body.appendChild(filmsContainer);
        } catch (error) {
            console.error('Error parsing movies data:', error);
        }
    }


    getMovies(){

    }
}
