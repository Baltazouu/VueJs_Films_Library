import Link from "../model/Link.js";

export default class LinkService {
  constructor() {
    this.links = [
        new Link(1, 'Google', 'http://www.google.com'),
        new Link(2, 'Yahoo', 'http://www.yahoo.com'),
        new Link(3, 'Bing', 'http://www.bing.com')
    ];
  }

  getLinks() {
    return [
      new Link(1, "Tous les films", "#"),
      new Link(2, "Ajouter un film", "#")
    ];
  }
  
  getLink(url){
    return this.links.find(link => link.url === url);
  }
}