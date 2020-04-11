const $ = window.$;
const button = $('.nav__button');
const menu = $('.nav__menu');

button.on('click', function() {
  menu.toggleClass('nav__menu_active');
});
