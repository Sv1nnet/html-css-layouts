import fadeOutElements from '@assets/js/utils/fadeOutElements';

const $ = window.$;
const $cards = $('.clients__logo');
const isDesktop = window.innerWidth > 768;

let delay = 0.6;
/* Every time the window is scrolled ... */
if (isDesktop) {
  $cards.each(function() {
    $(this).css({
      transition: `${delay}s`,
      opacity: '0',
    });

    delay += 0.5;
  });

  fadeOutElements($cards);

  $(window).scroll(function() {
    fadeOutElements($cards);
  });
}
