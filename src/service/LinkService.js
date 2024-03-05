
class LinkService {
  constructor() {
    this.links = [];
  }

  getLinks() {
    return this.links;
  }

  getLink(url){
    return this.links.find(link => link.url === url);
  }
}