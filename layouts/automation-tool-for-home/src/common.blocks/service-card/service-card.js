import fadeOutElements from '@assets/js/utils/fadeOutElements';

const $ = window.$;
const cards = $('.service-card');
const isDesktop = window.innerWidth > 768;

/* Every time the window is scrolled ... */
if (isDesktop) {
  cards.each(function() {
    $(this).css({
      transition: '.6s',
      opacity: '0',
      transform: 'translateX(250px)',
    });
  });

  fadeOutElements(cards, {
    extraCss: { transform: 'translateX(0px)' },
    elementOffsetCalc: { divider: 3, multiplier: 2 },
  });

  $(window).scroll(function() {
    fadeOutElements(cards, {
      extraCss: { transform: 'translateX(0px)' },
      elementOffsetCalc: { divider: 3, multiplier: 2 },
    });
  });
}
