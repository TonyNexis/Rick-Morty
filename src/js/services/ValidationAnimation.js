export default class ValidationAnimation {
    static animation(selector) {
        document.querySelector(selector).animate(
            [
              { transform: 'translateX(0)' },
              { transform: 'translateX(5px)' },
              { transform: 'translateX(-5px)' },
              { transform: 'translateX(2.5px)' },
              { transform: 'translateX(-2.5px)' },
              { transform: 'translateX(0)' },
            ],
            {
              duration: 200,
              iterations: 2,
            },
          );
    }
}
