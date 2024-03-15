// Importez les données du fichier movies.js
import { getMovies } from "../misc/movies.js";

export default {
    data() {
        return {
            movies: []
        };
    },
    mounted() {
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        this.movies = [...storedMovies, ...getMovies()];
        console.log("Movies: ", this.movies);
    },
    template: `
    <div class="container">
    <h3>Films à l'affiche</h3>
    <div class="row">
    
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie"></movie-card>
    </div>
    <movie-card v-for="movie in movies" :movie="movie"></movie-card>

    </div>
  </div>
    `
};