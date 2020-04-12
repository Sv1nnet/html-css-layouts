import scrollTo from '@assets/js/utils/scrollTo';
import setActiveNavItem from '@assets/js/utils/setActiveNavItem';

const $ = window.$;
const $navItems = $('.nav-menu__list-item');
const $sections = $(Array.prototype.map.call($navItems, function(el) {
  const scrollId = $(el).data('scrollTo');
  return $(`#${scrollId}`)[0];
}));
const $button = $('.nav__button');
const $buttonIcon = $('.nav__button-icon');

setActiveNavItem({ data: { $navItems, $sections } });

$(document).scroll(scrollHandler);

// Scroll to the section associated with a nav list item
$navItems.each(function() {
  const scrollId = $(this).data('scrollTo');
  const scrollToElement = $(`#${scrollId}`);

  $(this).on('click', function() {
    $(document).stop('scroll', false, true);
    $(document).off('scroll', scrollHandler);

    scrollTo({
      $element: scrollToElement,
      easing: 'easeOutCubic',
      done: () => {
        // done callback hires, for some reason, not after scroll event handler finished executing
        // so we need to hite it after a small delay
        setTimeout(() => {
          $(document).scroll(scrollHandler);
        }, 100);
      }
    });
  })
})

$navItems.on('click', function() {
  switchActiveNavItem($navItems, this, stylizeButton);
});

function switchActiveNavItem($list, element) {
  // Remove active style from other elements
  $list.each((i, el) => {
    if (element !== el && $(el).hasClass('nav-menu__list-item')) {
      $(el).removeClass('nav-menu__list-item_active');
    }
  });

  $(element).addClass('nav-menu__list-item_active');

  const shouldStylize = $list[0] === element;
  stylizeButton(shouldStylize);
}

function stylizeButton(shouldStylize) {
  // If button is active
  if ($buttonIcon.hasClass('nav__button-icon_active')) {
    if (shouldStylize) {
      $buttonIcon.addClass('nav__button-icon_active-icon-color_white');
      $button.addClass('nav__button_bg_transparent');
    } else {
      $buttonIcon.removeClass('nav__button-icon_active-icon-color_white');
      $button.removeClass('nav__button_bg_transparent');
    }
  }
}

function scrollHandler() {
  setActiveNavItem({ data: { $navItems, $sections } });
}

export default switchActiveNavItem;
