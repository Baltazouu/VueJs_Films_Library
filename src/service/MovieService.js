function displayAllFilms(films) {
    // Créer un élément div pour contenir tous les films
    const filmsContainer = document.createElement('div');

    // Parcourir tous les films
    films.forEach(film => {
        // Créer un élément app-film
        const appFilm = document.createElement('app-film');

        // Définir les propriétés du film sur l'élément app-film
        appFilm.setAttribute('film', JSON.stringify(film));

        // Ajouter l'élément app-film au conteneur des films
        filmsContainer.appendChild(appFilm);
    });

    // Ajouter le conteneur des films au corps du document
    document.body.appendChild(filmsContainer);
}
