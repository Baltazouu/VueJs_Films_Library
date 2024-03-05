import LinkService from "../service/LinkService.js";

export default {
    methods: {
        displayLinks: function () {

            const linkService = new LinkService();

            links:[] = linkService.getlinks();
            this.$emit('displayLinks', links);
        }
    },
    components: {},
    template:
        `
        <section>
            <h1>Navbar</h1>

                    <div v-for = "link in links" :key = "links.id">
                        <a href={{ link.label }}>lien</a>
                    </div>
        </section>
        `
}