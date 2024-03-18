import { getMovies } from "../misc/movies.js";
import { ApiService } from "../service/APIService.js";
import {Movie} from "../model/Movie.js";

export default {
    data() {
        return {
            movies: [],
            defaultMovies:[],
            movieSearch:""
        };
    },
    mounted() {
        const APIService = new ApiService();

        const apiMovies = [];
        let id = 0;

        APIService.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
            .then(data => {
                console.log(data);

                data.forEach(movie => {
                    apiMovies.push(new Movie(id, movie.Title, "No Description", movie.Poster));
                    id += 1;
                });

                const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
                this.movies = [...apiMovies, ...storedMovies, ...getMovies()];

                // copy movies to avoid to call the api each time
                this.defaultMovies = this.movies;


            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            })
    },
    methods:{
        moviesContains(text){
            // reset movie list

            this.movies = this.defaultMovies;

            if(text.trim() === ''){
                return;
            }

            this.movies = this.movies.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()));
        }
    },
    template: `
    <div class="container">
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