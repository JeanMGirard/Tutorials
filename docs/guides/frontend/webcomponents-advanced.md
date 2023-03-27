## Advanced



### Shadow DOM
Shadow DOM can be a little confusing. Allow me to expand a little bit on terminology:

#### Light DOM
The light DOM lives outside the component's shadow DOM, and is basically anything that is not shadow DOM. For example, the ``<h1>Hello world</h1>`` up there lives in the light DOM. The term light DOM is used to distinguish it from the Shadow DOM. It's perfectly fine to make web components using light DOM, but you miss out on the great features of shadow DOM.

#### Open shadow DOM:
Since the latest version (V1) of the shadow DOM specification, we can now use open or closed shadow DOM. Open shadow DOM allows us to create a sub DOM tree next to the light DOM to provide encapsulation for our components. Our shadow DOM can still be pierced by javascript like so: document.querySelector('our-element').shadowRoot. One of the downsides of shadow DOM is that web components are still relatively young, and many external libraries don't account for it.

#### Closed shadow DOM:
Closed shadow roots are not very applicable, as it prevents any external javascript from piercing the shadowroot. Closed shadow DOM makes your component less flexible for yourself and your end users and should generally be avoided.

Some examples of elements that do use a closed shadow DOM are the ``<video>`` element.
