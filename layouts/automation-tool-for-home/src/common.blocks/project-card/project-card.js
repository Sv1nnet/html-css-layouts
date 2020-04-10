import fadeOutElements from '@assets/js/utils/fadeOutElements';

const $ = window.$;
const cards = $('.project-card');
const isDesktop = window.innerWidth > 768;

/* Every time the window is scrolled ... */
if (isDesktop) {
  cards.each(function() {
    $(this).css({
      transition: '.6s',
      opacity: '0',
      transform: 'scale(0)',
    });
  });

  fadeOutElements(cards, {
    extraCss: { transform: 'scale(1)' },
    elementOffsetCalc: { divider: 3, multiplier: 1 },
  });

  $(window).scroll(function() {
    fadeOutElements(cards, {
      extraCss: { transform: 'scale(1)' },
      elementOffsetCalc: { divider: 3, multiplier: 1 },
    });
  });
}
