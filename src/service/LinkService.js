import Link from "../model/Link.js";

export default class LinkService {
  constructor() {
    this.links = [
      new Link(1, "Tous les films", "/allMovies"),
      new Link(2, "Ajouter un film", "/addMovie")
    ];
  }

  getLinks() {
    return this.links;
  }
  
  getLink(url){
    return this.links.find(link => link.url === url);
  }
}