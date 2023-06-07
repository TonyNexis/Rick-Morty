export default class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;

    // Обработчик события изменения хэша
    window.addEventListener('hashchange', () => this.handleRouteChange());
  }

  // Добавление маршрута
  addRoute(path, callback) {
    this.routes[path] = callback;
  }

  // Обработка изменения маршрута
  handleRouteChange() {
    const hash = window.location.hash.slice(1); // Удаляем символ "#"

    // Ищем соответствующий маршрут и вызываем его обработчик
    for (const [path, callback] of Object.entries(this.routes)) {
      if (hash.match(path)) {
        this.currentRoute = path;
        callback();
        break;
      }
    }
  }

  // Перенаправление на указанный маршрут
  navigateTo(path) {
    window.location.hash = path;
  }

  // Получение ID персонажа из URL
  // getCharacterIdFromUrl() {
  //   const hash = window.location.hash.slice(1);
  //   const match = hash.match(/^\/profile\/(\d+)$/);
  //   return match ? match[1] : null;
  // }
}
