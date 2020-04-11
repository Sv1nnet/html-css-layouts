import scrollTo from '@assets/js/utils/scrollTo';

const $ = window.$;
const $button = $('.header__button');

$button.on('click', (e) => {
  e.preventDefault();

  scrollTo({ selector: '.projects', easing: 'easeOutCubic' });
});
