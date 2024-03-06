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
        displayLinks: function () {
          const linkService = new LinkService();
          const links = linkService.getLinks();
          this.links = links;
        }
      },

    template:
        `
        <section>
            <h1>Navbar</h1>

                    <div v-for = "link in links" :key = "links.id">
                        <a :href="link.link">{{ link.label }}</a>
                    </div>
        </section>
        `
}