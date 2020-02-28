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


### Shadow DOM
Shadow DOM can be a little confusing. Allow me to expand a little bit on terminology:

#### Light DOM
The light DOM lives outside the component's shadow DOM, and is basically anything that is not shadow DOM. For example, the <h1>Hello world</h1> up there lives in the light DOM. The term light DOM is used to distinguish it from the Shadow DOM. It's perfectly fine to make web components using light DOM, but you miss out on the great features of shadow DOM.

#### Open shadow DOM:
Since the latest version (V1) of the shadow DOM specification, we can now use open or closed shadow DOM. Open shadow DOM allows us to create a sub DOM tree next to the light DOM to provide encapsulation for our components. Our shadow DOM can still be pierced by javascript like so: document.querySelector('our-element').shadowRoot. One of the downsides of shadow DOM is that web components are still relatively young, and many external libraries don't account for it.

#### Closed shadow DOM:
Closed shadow roots are not very applicable, as it prevents any external javascript from piercing the shadowroot. Closed shadow DOM makes your component less flexible for yourself and your end users and should generally be avoided.

Some examples of elements that do use a closed shadow DOM are the <video> element.

