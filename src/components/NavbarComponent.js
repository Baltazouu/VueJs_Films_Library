import LinkService from "../service/LinkService.js";

export default {
    data() {
        return {
            links: []
        };
    },
    mounted() {
        this.displayLinks();
    },
    methods: {
        displayLinks() {
            const linkService = new LinkService();
            this.links = linkService.getLinks();
            console.log(this.links)
        },
        handleClick(link) {
            this.$emit('update-title', link.label);
        }
    },
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">TP Noté VueJS</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="link in links" :key="link.id">
          <router-link :to="link.link" @click="handleClick(link)" class="nav-link">{{ link.label }}</router-link>
        </li>
      </ul>
    </div>
  </nav>   
    `,
}
