export default {
    template: `
        <div>
            <h3>Add Article</h3>
            <form @submit.prevent="addMovie" class="add-movie-form">
            
                <label for="name">Film Name : </label>
                <input name="name" v-model="movieName" @focus="nameError = false" @blur="validateName"/>
                <span v-if="nameError && nameTouched" class="error">Le nom doit contenir entre 5 et 20 caractères</span>
                
                <label for="description">Film Description : </label>
                <textarea name="description" v-model="movieDescription" @focus="descriptionError = false" @blur="validateDescription"></textarea>
                <span v-if="descriptionError && descriptionTouched" class="error">La description doit contenir entre 20 et 100 caractères</span>                
                
                <label for="imgURL">Image URL : </label>
                <input name="imgURL" v-model="movieImgURL" @focus="imgError = false" @blur="validateImg"/>
                <span v-if="imgError && imgTouched" class="error">IMG URL is required</span>
                
                <button type="submit">Submit</button>

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
            if(this.movieDescription.length < 20 || this.movieDescription.length > 100){
                this.descriptionError = true;
                return false;
            }
            this.descriptionError = false;
            return true;
        },
        isNameValid() {
            if(this.movieName.length < 5 || this.movieName.length > 20){
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

        addMovie() {
            event.preventDefault();
            if(this.isDescriptionValid() && this.isImgValid() && this.isNameValid()){
                console.log("Movie ajouté avec succès.")
            }
        }
    }
}
