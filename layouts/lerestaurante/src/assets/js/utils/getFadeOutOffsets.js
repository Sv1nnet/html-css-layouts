const $ = window.$;

function getFadeOutOffsets(el, { divider = 1, multiplier = 1} = {}) {
  return {
    elementTwoThirds: $(el).offset().top + (($(el).outerHeight() / divider) * multiplier),
    windowBottom: $(window).scrollTop() + $(window).height(),
  }
}

export default getFadeOutOffsets;
