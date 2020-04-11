const $ = window.$;
const $button = $('.nav__button');
const $buttonIcon = $('.nav__button-icon');
const $listItems = $('.nav-menu__list-item');
const $navMenuWrapper = $('.nav__menu-wrapper');

$button.on('click', function() {
  // Since the $button is on the same line with the first list item we have to
  // set transpaent background to make the $button background match the list item one
  // if the list item is active
  if ($($listItems[0]).hasClass('nav-menu__list-item_active')) {
    $buttonIcon.addClass('nav__button-icon_active-icon-color_white');
    $button.addClass('nav__button_bg_transparent');
  }

  if ($buttonIcon.hasClass('nav__button-icon_active')) {
    resetButtonState();
    $buttonIcon.removeClass('nav__button-icon_active');
    $navMenuWrapper.removeClass('nav__menu-wrapper_active');
  } else {
    $buttonIcon.addClass('nav__button-icon_active');
    $navMenuWrapper.addClass('nav__menu-wrapper_active');
  }
});

function resetButtonState() {
  $button.removeClass('nav__button_bg_transparent');
  $buttonIcon.removeClass('nav__button-icon_active-icon-color_white');
}
