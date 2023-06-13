export default class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;

    window.addEventListener('hashchange', () => this.handleRouteChange());
  }

  addRoute(path, callback) {
    this.routes[path] = callback;
  }

  handleRouteChange() {
    const hash = window.location.hash.slice(1);

    for (const [path, callback] of Object.entries(this.routes)) {
      if (hash.match(path)) {
        this.currentRoute = path;
        callback();
        break;
      }
    }
  }

  navigateTo(path) {
    window.location.hash = path;
  }
}
