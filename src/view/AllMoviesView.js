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
        <div class="card h-100">
          <img :src="movie.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
};
/*
<div>
            <h3>Films à l'affiche</h3>
            <div class="allMovies">
                <div v-for="movie in movies" :key="movie.id">
                    <movie-card :movie="movie"/>
                </div>
            </div>
        </div>
*/
/*
    <div class="container">
    <h3>Films à l'affiche</h3>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="movie in movies" :key="movie.id">
        <div class="card h-100">
          <img :src="movie.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   */