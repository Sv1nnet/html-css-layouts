import getFadeOutOffsets from '@assets/js/utils/getFadeOutOffsets';

const $ = window.$;

function fadeOutElements(elements, { extraCss, elementOffsetCalc } = { extraCss: {}, elementOffsetCalc: {} }) {
  /* Check the location of each desired element */
  elements.each(function() {
    const { elementTwoThirds, windowBottom } = getFadeOutOffsets(this, elementOffsetCalc);

    /* If two thirds of the object is completely visible in the window, fade it in */
    if (windowBottom > elementTwoThirds) {
      $(this).css({ opacity: '1', ...extraCss });
    }
  });
}

export default fadeOutElements;
