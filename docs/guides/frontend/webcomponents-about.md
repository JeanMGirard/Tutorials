## About
### What are web components?
Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

### Specifications
**[Custom Elements](#custom-elements)**: The [Custom Elements specification](https://html.spec.whatwg.org/multipage/custom-elements.html) lays the foundation for designing and using new types of DOM elements.  
**[Shadow DOM](#Shadow-dom)**: The [shadow DOM specification](https://w3c.github.io/webcomponents/spec/shadow/) defines how to use encapsulated style and markup in web components.  
**[ES Modules](#ES-Modules)**: The [ES Modules specification](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system) defines the inclusion and reuse of JS documents in a standards based, modular, performant way.  
**[HTML Template](#HTML-Templates)**: The [HTML template element specification](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/) defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.  


### How do I use a web component?
Using a custom element is as simple as importing it, and using the new tags in an HTML document. For example, to use the paper-button element:

```html   
<script type="module" src="node_modules/@polymer/paper-button/paper-button.js"></script>
...
<paper-button raised class="indigo">raised</paper-button>
```


### Custom Elements
Custom Elements are a set of APIs that provide a way for developers to extend HTML elements, build new ones and define their behavior. Because Custom Elements are based on existing web standards, defined by the W3C consortium, they can be reused in very different contexts. This makes it easier to build applications in a modular way! It also leads to increased readability, maintainability and interoperability of code. Custom Elements are the building blocks of Web Components.

### HTML Templates
HTML Templates are a way to declare code fragments that aren’t rendered at page load, but can be cloned and inserted in the document during runtime using JavaScript. We’ve all written HTML before, so now you think componentize your HTML by dropping it into a template - we now have first-class browser support for this which is a fantastic addition to the web platform. It also doesn’t matter how many times we might use that element and template, it is cloned in the browser and only parsed once - giving us a nice performance boost.

Web Components expose a ``<template>`` element, which can be used like this to wrap our actual template code:

```html   
<template>
  <h1>The ultimate guide to Web Components!</h1>
  <p>What do you want to learn about Web Components today?</p>
</template>
```

### Shadow dom
First an award for the coolest sounding API, Shadow DOM is a web standard that allows you to encapsulate style and markup in a scoped DOM subtree that can be linked to any HTML element. A scoped DOM subtree encapsulated in a Web Component is called a Shadow Tree and a component to which this tree is linked is called the Shadow Host. Although HTML and CSS are encapsulated, it’s still possible for an element to emit events that can be captured by other parts of an application. Besides that, the Shadow DOM ensures that a component will work in any environment, even if other CSS or JavaScript is at play on the page. We’ll be exploring these in more detail as we continue through this post and the series! You can also adjust your Developer Tools settings to view Shadow DOM and more whilst inspecting elements.

### ES Modules
Modules are a way to bundle a collection of small, independent functionalities into a library and import them into other JavaScript files. About every programming language has a standard implementation, except JavaScript (and that probably didn’t come as a surprise). There were solutions like CommonJS or AMD, but there was no standard solution available - until recent!

This changed with the introduction of ES Modules in ES2015 (ES6), which finally made a standard available for working with modules. The API provides a syntax that makes it possible to export a class, function, or any variable binding or declaration. You just have to use the export prefix and you’re set!
