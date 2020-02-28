## References

### lifecycle callbacks
```js   
class MyElement extends HTMLElement {
  constructor() {
    super(); 
  }
  static get observedAttributes() {
    return ['my-attr'];
  }
  connectedCallback() { }
  disconnectedCallback() { }
  attributeChangedCallback(name, oldVal, newVal) { }
  adoptedCallback() { }
}

window.customElements.define('my-element', MyElement);
```

#### connectedCallback
The connectedCallback is called when the element is inserted to the DOM. It's a good place to run setup code, like fetching data, or setting default attributes.

#### disconnectedCallback
The disconnectedCallback is called whenever the element is removed from the DOM. Clean up time! We can use the disconnectedCallback to remove any event listeners, or cancel intervals.

#### attributeChangedCallback
The attributeChangedCallback is called any time your element's observed attributes change. We can observe an element's attributes by implementing a static observedAttributes getter, like so:

```js   
static get observedAttributes() { return ['my-attr']; }
```

In this case, any time the my-attr attribute is changed, the attributeChangedCallback will run. We'll go more in-depth on this later this blog post.

#### adoptedCallback
The adoptedCallback is called each time the custom element is moved to a new document. You'll only run into this use case when you have ``<iframe>`` elements in your page.

#### registering 
And finally, though not part of the lifecycle, we register our element to the CustomElementRegistry like so:

```js   
window.customElements.define('my-element', MyElement);
```
