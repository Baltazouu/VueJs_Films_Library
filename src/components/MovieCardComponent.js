export default {
    data() {
        return {
            color: "black"
        };
    },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        filmVu() {
            if (this.color === "black") {
                this.color = "green";
            } else {
                this.color = "black";
            }
        },
        truncateDescription(description) {
            if (description.length > 20) {
                return description.substring(0, 20) + '...';
            } else {
                return description;
            }
        }
    },
    mounted() {},
    template: `
    <div class="card h-100">
      <img :src="movie.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title" :style="{ color: color }">{{ movie.title }}</h5>
        <p class="card-text">{{ truncateDescription(movie.description) }}</p>
        <button @click="filmVu">Film Vu ?</button>
      </div>
    </div>
  `
};
