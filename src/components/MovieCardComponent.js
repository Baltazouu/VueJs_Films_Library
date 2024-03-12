export default {
    props: {
        movie: {
            type: Object,
            required: true
            }
        },
    methods: {
        truncateDescription(description) {
            if (description.length > 20) {
                return description.substring(0, 20) + '...';
            } else {
                return description;
            }
        }
    },
    mounted(){
        console.log("ICIC")
    },
    template:`
    <div class="movie-card">
    <img :src="movie.image" :alt="movie.title" class="img-fluid rounded-top" />
    <div class="card-body">
      <h2 class="card-title">{{ movie.title }}</h2>
      <p class="card-text">{{ truncateDescription(movie.description) }}</p>
    </div>
  </div>  
`
}
/*
<div class="movieCard">
            <h2>{{movie.title}}</h2>
            <p>{{truncateDescription(movie.description)}}</p>
            <img :src="movie.image" :alt="movie.title">        
        </div>
*/