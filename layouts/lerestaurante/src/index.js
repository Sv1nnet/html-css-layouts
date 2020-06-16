import './imports/style-imports.js';

window.onload = function() {
  const IP = 'http://192.168.0.15:4242';

  function loadScript(url, options, callback) {
    var script = document.createElement('script')
    script.type = 'text/javascript';

    if (typeof options !== 'function') {
      for (const opt in options) {
        script[opt] = options[opt];
      }
    } else {
      callback = options;
    }

    if (script.readyState) {
      // handle IE
      script.onreadystatechange = function() {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null;
          if (callback) callback();
        }
      };
    } else {
      // handle other browsers
      script.onload = function() {
        if (callback) callback();
      };
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  loadScript('https://code.jquery.com/jquery-3.4.1.min.js',
    {
      crossorigin: 'anonymous',
    },
    function() {
      loadScript(
        `${IP}/assets/js/libs/jQueryUI/jquery-ui.min.js`,
        function() {
          loadScript(`${IP}/script-imports.js`);
        });
    },
  );
}