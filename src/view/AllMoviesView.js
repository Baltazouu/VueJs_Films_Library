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
        <div>
            <h3>Films à l'affiche</h3>
            <div class="allMovies">
                <div v-for="movie in movies" :key="movie.id">
                    <movie-card :movie="movie"/>
                </div>
            </div>
        </div>
    `
};
