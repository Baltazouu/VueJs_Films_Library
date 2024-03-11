

export default {

    data() {
        return{ movies: [] }
    },

    mounted() {

        this.movies = JSON.parse(localStorage.getItem('movies')) || [];


        console.log("Movies: ")

        console.log(this.movies)

    },




    template: `
        <h3>Les films à l'affiche</h3> 
        
         <div v-for="movie in movies" :key="movie.id">
          <movie-card :movie="movie"></movie-card>
         </div>
    `

}