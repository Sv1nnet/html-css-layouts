
import switchActiveNavItem from '@blocks/nav-menu/__list-item/nav-menu__list-item';
import throttle from '@assets/js/utils/throttle';

const $ = window.$;
// We need this padding because on mobile (Android Mozila and Chrome) we can't scroll
// a page to the very bottom, so we need a little padding for checking the bottom of the page
const MOBILE_BOTTOM_PADDDING = 100;

function setActiveNavItem({ data }) {
  throttle(() => {
    let closestElement;

    const { $navItems, $sections } = data;
    const scrollPos = $(document).scrollTop();
    const isPageFullyScrolled = $(window).scrollTop() + $(window).height() >= $(document).height() - MOBILE_BOTTOM_PADDDING;
  
    if (scrollPos === 0) {
      closestElement = $navItems[0];
    } else if (isPageFullyScrolled) {
      closestElement = $navItems[$navItems.length - 1];
    }

    if (!closestElement) {
      Array.prototype.some.call($sections, function(el) {
        const { top } = $(el).offset();
        const height = $(el).height();

        if (top <= scrollPos && top + height > scrollPos) {
          closestElement = $navItems.filter((_, listItem) => $(listItem).data('scrollTo') == $(el).attr('id'))[0];
          return true;
        }

        return false;
      });
    }

    if (closestElement) {
      switchActiveNavItem($navItems, closestElement);
    }
  }, 150);
}

export default setActiveNavItem;
