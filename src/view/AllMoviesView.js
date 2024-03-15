// Importez les données du fichier movies.js
import { getMovies } from "../misc/movies.js";

export default {
    data() {
        return {
            movies: [],
            movieSearch:""
        };
    },
    mounted() {
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        this.movies = [...storedMovies, ...getMovies()];
    },

    methods:{
        moviesContains(text){

            // reset movie list
            const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
            this.movies = [...storedMovies, ...getMovies()];

            if(text.trim() === ''){
                return;
            }

            this.movies = this.movies.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()));
        }
    },
    template: `
    <div class="container">
        <h3 class="mb-4">Films à l'affiche</h3>
        <div class="input-group mb-3">
            <label class="input-group-text" for="search">Rechercher un film</label>
            <input v-model="movieSearch" @input="moviesContains(movieSearch)" id="search" name="search" type="text" class="form-control">
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="movie in movies" :key="movie.id">
                <movie-card :movie="movie"></movie-card>
            </div>
        </div>
    </div>
    `
};