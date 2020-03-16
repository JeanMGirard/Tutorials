
| Shortcut  | Code | Description | 
| --------  | ---- | ----------- |
| == Class generators == | | |
| rcc   |  import React; class $1$ extends Component { render(){} }  |  Creates a React component class with ES6 module system |
| rcjc  |  class $1$ extends Component { render(){} }                |  Creates a React component class with ES6 module system |
| == Functional components == | | |
| rsc   |  import React; const $1$ = () => { return (); };    |  Creates a stateless React component as a constant        |
| rsf   |  import React; function $1$(props) { return (); };  |  Creates a stateless React component as a named function  |
| rsi   |  import React; const $1$ = (props) => ();           |  Creates a stateless React component with Implicit Return and props |
| ===   |  | |
| bnd   |  this.$1$ = this.$1$.bind(this);  |  Binds the this of a method. To be used inside a constructor  |
| est   |  this.state = {&#10; $1$&#10;};   |  Creates empty state object. To be used in a constructor.     |
| ssf   |  this.setState((state, props)     |  Performs a shallow merge of nextState into current state     |
| sst   |  this.setState($END$);            |  Performs a shallow merge of nextState into current state     |
| state |  this.state.$END$                 |  Access component's state                                     |
| cdc   |  componentDidCatch(error, info) {&#10; $END$&#10;}&#10;  |  Error boundaries catch errors during rendering |
| cdm   |  componentDidMount() |  Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. |
| cdup  |  componentDidUpdate(prevProps, prevState)   |  Invoked immediately after the component's updates are flushed to the DOM. |
| con   |  constructor(props) |  Adds a default constructor for the class that contains props as arguments |
| conc  |  constructor(props, context)  |  Adds a default constructor for the class that contains props and context as arguments  |
| cwm   |  componentWillMount()  |  Invoked once, both on the client and server, immediately before the initial rendering occurs |
| cwun  |  componentWillUnmount() |  Invoked immediately before a component is unmounted from the DOM. |
| scu   |  shouldComponentUpdate(nextProps, nextState)  |  Invoked before rendering when new props or state are being received. |
| gdsfp |  static getDerivedStateFromProps(nextProps, prevState)  | Invoked after a component is instantiated as well as when it receives new props. |
| gsbu  |  getSnapshotBeforeUpdate(prevProps, prevState)  |  Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values |
| props  |  this.props.$END$  |  Access component's props |
| ren  |  render() { return (); }  |  When called, it should examine this.props and this.state and return a single child element.
