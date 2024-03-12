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
        <section id="navbar">
            <div v-for="link in links" :key="link.id">
                <router-link :to="link.link" @click="handleClick(link)">{{ link.label }}</router-link>
            </div>
        </section>
       
    `,

}

