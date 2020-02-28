# Web Components


<!-- tabs:start -->
[webcomponents-about](webcomponents-about.md ':include')

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
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().
// header.shadowRoot === shadowRoot
// shadowRoot.host === header
```

## Advanced


## References


## Resources
* [webcomponents.org](https://www.webcomponents.org/)
* [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Web_Components)


### Core librairies
* [Hybrids](https://github.com/hybridsjs/hybrids) is a UI library for creating Web Components with simple and functional API.
* [LitElement](https://github.com/Polymer/lit-element) uses lit-html to render into the element's Shadow DOM and adds API to help manage element properties and attributes.
* [Polymer](https://www.polymer-project.org/) provides a set of features for creating custom elements.
* [Slim.js](http://slimjs.com/) is an opensource lightweight web component library that provides data-binding and extended capabilities for components, using es6 native class inheritance.
* [Stencil](https://stenciljs.com/) is an opensource compiler that generates standards-compliant web components.

### Awesome lists
* [obetomuniz/awesome-webcomponents](https://github.com/obetomuniz/awesome-webcomponents)
* [nepaul/awesome-web-components](https://github.com/nepaul/awesome-web-components)

<!-- tabs:end -->
