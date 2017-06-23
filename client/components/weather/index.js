document.addEventListener('load', init);

import { checkSupport } from '../../lib/helpers';
import Component from './component.js';

checkSupport().then(init);
function init() {
  customElements.define('weather-component', Component);
}
