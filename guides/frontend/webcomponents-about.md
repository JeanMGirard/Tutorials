## About

### What are web components?
Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

### Specifications
**Custom Elements**: The [Custom Elements specification](https://html.spec.whatwg.org/multipage/custom-elements.html) lays the foundation for designing and using new types of DOM elements.  
**Shadow DOM**: The [shadow DOM specification](https://w3c.github.io/webcomponents/spec/shadow/) defines how to use encapsulated style and markup in web components.  
**ES Modules**: The [ES Modules specification](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system) defines the inclusion and reuse of JS documents in a standards based, modular, performant way.  
**HTML Template**: The [HTML template element specification](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/) defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.  


### How do I use a web component?
Using a custom element is as simple as importing it, and using the new tags in an HTML document. For example, to use the paper-button element:

```html
<script type="module" src="node_modules/@polymer/paper-button/paper-button.js"></script>
...
<paper-button raised class="indigo">raised</paper-button>
```
