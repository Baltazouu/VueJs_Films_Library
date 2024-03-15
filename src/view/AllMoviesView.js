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
    <h3>Films à l'affiche</h3>
    <label for="search">Rechercher Un Film : </label>
    <input v-model="movieSearch" @input="moviesContains(movieSearch)" name="search">
    <div class="row">
    
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie"></movie-card>
    </div>
   
    </div>
  </div>
    `
};