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
          const links = linkService.getLinks();
          this.links = links;
        },      
        handleClick(link) {
            this.$emit('update-title', link.label);
        }
          
      },
    template:
        `
        <section>
            <h1>Navbar</h1>
                <div v-for = "link in links" :key = "link.id">
                    <a :href="link.link" @click="handleClick(link)">{{ link.label }}</a>
                </div>
        </section>
        `
}