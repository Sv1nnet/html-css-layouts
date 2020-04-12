
import switchActiveNavItem from '@blocks/nav-menu/__list-item/nav-menu__list-item';
import throttle from '@assets/js/utils/throttle';

const $ = window.$;

function setActiveNavItem({ data }) {
  const scrollPos = $(document).scrollTop();
  let closestElement;
  
  if (scrollPos === 0) {
    closestElement = data.$navItems[0];
  }

  throttle(() => {

    const { $navItems, $sections } = data;
    const scrollPos = $(document).scrollTop();

    Array.prototype.some.call($sections, function(el) {
      const { top } = $(el).offset();
      const height = $(el).height();
      
      if (top <= scrollPos && top + height > scrollPos) {
        closestElement = $navItems.filter((_, listItem) => $(listItem).data('scrollTo') == $(el).attr('id'));
        return true;
      }

      return false;
    });

    if (closestElement) switchActiveNavItem($navItems, closestElement[0]);
  }, 150);
}

export default setActiveNavItem;
