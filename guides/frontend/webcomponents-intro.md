## Introduction
### define a new HTML element

```js   
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);
```   
To use the new tag:
```html   
<app-drawer></app-drawer>
```

### Creating and using a shadow root
*You can think of shadow DOM as a scoped subtree inside your element.*

A shadow root is a document fragment that gets attached to a "host" element. The act of attaching a shadow root is how the element gains its shadow DOM. To create shadow DOM for an element, call element.attachShadow():

```js   
const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; 
// OR
class OneDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.close = this.close.bind(this);
  }
}
```
