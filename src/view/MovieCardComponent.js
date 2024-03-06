import {Movie} from "../model/Movie";

export default  {


    props:{
        movie : Movie,
        required:true
    },

    methods:{


    },

    component:{},

    template:
    `
    <section>
        <h1>Movie Card</h1>
        <div>
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.description }}</p>
            <img :src="movie.image" :alt="movie.title">
        </div>
        
        
    </section>
    `

}