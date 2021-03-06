const $ = window.$;

/**
 * 
 * @param {object} options
 * @param {Element} options.$element jQuery object contains element we want to scroll to
 * @param {string} options.selector selector of the element we want to scroll to
 * @param {Element} options.$scrollable jQuery object contains element we want to scroll
 * @param {number} options.duration time in ms that scrolling takes 
 * @param {string} options.easing easing function for scrolling
 */
function scrollTo({
  $element = null,
  selector = null,
  $scrollable = $('html, body'),
  duration = 1000,
  easing = 'linear',
  done = null,
}) {
  if ($element) {
    $scrollable.stop().animate(
      {
        scrollTop: $element.offset().top,
      },
      {
        duration,
        easing,
        done,
      },
    );
  }

  if (selector) {
    $scrollable.stop().animate(
      {
        scrollTop: $(selector).offset().top,
      },
      {
        duration,
        easing,
        done,
      },
    );
  }

  if (!$element && !selector) {
    throw new Error('At least $element or selector has to be provided');
  }
}

export default scrollTo;