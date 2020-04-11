import scrollTo from '@assets/js/utils/scrollTo';

const $ = window.$;
const $listItems = $('.nav-menu__list-item');
const $button = $('.nav__button');
const $buttonIcon = $('.nav__button-icon');

// Scroll to the section associated with a nav list item
$listItems.each(function() {
  const scrollId = $(this).data('scrollTo');
  const scrollToElement = $(`#${scrollId}`);
  
  $(this).on('click', function() {
    scrollTo({ $element: scrollToElement, easing: 'easeOutCubic' });
  })
})

$listItems.on('click', function() {
  // Stylize button
  if ($listItems[0] === this) {
    $buttonIcon.addClass('nav__button-icon_active-icon-color_white');
    $button.addClass('nav__button_bg_transparent');
  } else {
    $buttonIcon.removeClass('nav__button-icon_active-icon-color_white');
    $button.removeClass('nav__button_bg_transparent');
  }

  // Remove active style from other elements
  $listItems.each((i, el) => {
    if (this !== el && $(el).hasClass('nav-menu__list-item')) {
      $(el).removeClass('nav-menu__list-item_active');
    }
  });

  $(this).addClass('nav-menu__list-item_active');
});