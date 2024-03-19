import { getMovies } from "../misc/movies.js";
import { ApiService } from "../service/APIService.js";
import {Movie} from "../model/Movie.js";

export default {
    data() {
        return {
            movies: [],
            movieSearch:""
        };
    },
    mounted() {
        this.initMovies(); // pas besoin d'await ici
    },
    methods:{
            async initMovies() {
                try {
                    const APIService = new ApiService();
                    const apiMovies = [];
                    let id = 0;

                    const data = await APIService.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
                    console.log(data);

                    data.forEach(movie => {
                        apiMovies.push(new Movie(id, movie.Title, "No Description", movie.Poster));
                        id += 1;
                    });

                    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
                    this.movies = [...apiMovies, ...storedMovies, ...getMovies()];

                } catch (error) {
                    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
                }
            },

            async moviesContains(text) {
                await this.initMovies();

                if (text.trim() === '') {
                    return;
                }

                this.movies = this.movies.filter(movie =>
                    movie.title.toLowerCase().includes(text.toLowerCase())
                );
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
}
