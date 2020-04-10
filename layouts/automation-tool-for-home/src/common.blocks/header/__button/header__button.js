const $ = window.$;
const button = $('.header__button');

button.on('click', (e) => {
  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $('.projects').offset().top,
    },
    {
      duration: 1000,
      easing: 'easeOutCubic',
    },
  );
});
