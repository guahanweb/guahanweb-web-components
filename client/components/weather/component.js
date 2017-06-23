const tpl = require('./template.html');
let template = document.createElement('div');
template.innerHTML = tpl;

class Component extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    const instance = template.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
}

export default Component;
