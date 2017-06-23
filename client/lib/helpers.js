const supportsCustomElementsV1 = 'customElement' in window;
const polyfill_url = '/lib/polyfill/custom-elements.js';

function checkSupport() {
  return new Promise(function (resolve, reject) {
    if (!supportsCustomElementsV1) {
      const script = document.createElement('script');
      script.src = polyfill_url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    } else {
      resolve();
    }
  });
}

export { checkSupport }
