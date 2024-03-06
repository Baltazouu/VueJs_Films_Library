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
    template:
    `
<template>
    <section>
        <h1>Movie Card</h1>
        <div>
            <h2>{{movie.title}}</h2>
            <p>{{truncateDescription(movie.description)}}</p>
            <img :src="movie.image" :alt="movie.title">
        </div>
    </section>
</template>
`
}
