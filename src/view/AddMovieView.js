import {Movie} from "../model/Movie.js";

export default {
    template: `
    <div>
        <h3>Add Article</h3>
        <form @submit.prevent="addMovie($router)" class="add-movie-form">

            <div class="form-group">
                <label for="name">Film Name:</label>
                <input type="text" name="name" v-model="movieName" class="form-control" @focus="nameError = false" @blur="validateName">
                <span v-if="nameError && nameTouched" class="error">Le nom doit contenir entre 5 et 30 caractères</span>
            </div>

            <div class="form-group">
                <label for="description">Film Description:</label>
                <textarea name="description" v-model="movieDescription" class="form-control" @focus="descriptionError = false" @blur="validateDescription"></textarea>
                <span v-if="descriptionError && descriptionTouched" class="error">La description doit contenir entre 30 et 100 caractères</span>
            </div>

            <div class="form-group">
                <label for="imgURL">Image URL:</label>
                <input type="text" name="imgURL" v-model="movieImgURL" class="form-control" @focus="imgError = false" @blur="validateImg">
                <span v-if="imgError && imgTouched" class="error">IMG URL is required</span>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    </div>

    `,
    
    data(){
        return {
            movieName:'',
            movieDescription:'',
            movieImgURL:'',
            nameError:false,
            descriptionError:false,
            imgError:false,
            nameTouched: false,
            descriptionTouched: false,
            imgTouched: false
        }
    },

    methods: {

        validateDescription() {
            this.descriptionTouched = true;
            this.isDescriptionValid();
        },

        validateName() {
            this.nameTouched = true;
            this.isNameValid();
        },

        validateImg() {
            this.imgTouched = true;
            this.isImgValid();
        },

        isDescriptionValid(){
            if(this.movieDescription.length < 30 || this.movieDescription.length > 100){
                this.descriptionError = true;
                return false;
            }
            this.descriptionError = false;
            return true;
        },
        isNameValid() {
            if(this.movieName.length < 5 || this.movieName.length > 30){
                this.nameError = true;
                return false;
            }
            this.nameError = false;
            return true;
        },
        isImgValid(){
            if(this.movieImgURL.trim() === ''){
                this.imgError= true;
                return false;
            }
            this.imgError = false;
            return true;
        },

        addMovie(router) {

            event.preventDefault();

            this.validateDescription()
            this.validateName()
            this.validateImg()


            if(this.isDescriptionValid() && this.isImgValid() && this.isNameValid()){

                const movie = new Movie(123,this.movieName,this.movieDescription,this.movieImgURL);

                let movies = JSON.parse(localStorage.getItem('movies')) || [];
                movies.push(movie)

                localStorage.setItem('movies', JSON.stringify(movies));

                console.log("Movie ajouté avec succès.")

                router.push({ path: '/allMovies', replace: true })

            }
        }
    }
}
