
| Shortcut  | Code | Description | 
| --------  | ---- | ----------- |
| bnd  |  this.$1$ = this.$1$.bind(this);$END$  |  Binds the this of a method. To be used inside a constructor |
| cdc  |  componentDidCatch(error, info) {&#10; $END$&#10;}&#10;  |  Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them |
| cdm  |  componentDidMount() {&#10; $END$&#10;}&#10;  |  Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. |
| cdup  |  componentDidUpdate(prevProps, prevState) {&#10; $END$&#10;}&#10;  |  Invoked immediately after the component's updates are flushed to the DOM. |
| con  |  constructor(props) {&#10; super(props);&#10; $END$&#10;}&#10;  |  Adds a default constructor for the class that contains props as arguments |
| conc  |  constructor(props, context) {&#10; super(props, context);&#10; $END$&#10;}&#10;  |  Adds a default constructor for the class that contains props and context as arguments  |
| cwm  |  componentWillMount() {&#10; $END$&#10;}&#10;  |  Invoked once, both on the client and server, immediately before the initial rendering occurs |
| cwr  |  componentWillReceiveProps(nextProps) {&#10; $END$&#10;}&#10;  |  Invoked when a component is receiving new props. This method is not called for the initial render. [DEPRECATION NOTE]: This method is deprecated in React 16.3 |
| cwun  |  componentWillUnmount() {&#10; $END$&#10;}&#10;  |  Invoked immediately before a component is unmounted from the DOM. |
| cwup  |  componentWillUpdate(nextProps, nextState) {&#10; $END$&#10;}&#10;  |  Invoked immediately before rendering when new props or state are being received. [DEPRECATION NOTE]: This method is deprecated in React 16.3 |
| disp  |  function mapDispatchToProps(dispatch) {&#10; return {&#10; }&#10;}  |  Adds the redux mapDispatchToProps function |
| est  |  this.state = {&#10; $1$&#10;};  |  Creates empty state object. To be used in a constructor. |
| gdsfp  |  static getDerivedStateFromProps(nextProps, prevState) {&#10; $END$&#10;}&#10;  | Invoked after a component is instantiated as well as when it receives new props. |
| gsbu  |  getSnapshotBeforeUpdate(prevProps, prevState) {&#10; $END$&#10;}&#10;  |  Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values |
| props  |  this.props.$END$  |  Access component's props |
| rcc  |  import React, { Component } from 'react';&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;export default $TM_FILENAME_BASE$;  |  Creates a React component class with ES6 module system |
| rcjc  |  class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;  |  Creates a React component class with ES6 module system
| rdp  |  $1$.defaultProps = {&#10; $2$&#10;};  |  Creates empty defaultProps declaration
| ren  |  render() {&#10; return (&#10;  &lt;div&gt;&#10;   $END$&#10;  &lt;/div&gt;&#10; );&#10;}  |  When called, it should examine this.props and this.state and return a single child element.
| rpt  |  $1$.propTypes = {&#10; $2$&#10;};  |  Creates empty propTypes declaration
| rrc  |  import React, { Component } from 'react';&#10;import { connect } from 'react-redux';&#10;&#10;function mapStateToProps(state) {&#10; return {&#10;&#10; };&#10;}&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;export default connect(&#10; mapStateToProps,&#10;)($TM_FILENAME_BASE$);  |  Creates a React component class connected to redux
| rrdc  |  import React, { Component } from 'react';&#10;import { connect } from 'react-redux';&#10;&#10;function mapStateToProps(state) {&#10; return {&#10;&#10; };&#10;}&#10;&#10;function mapDispatchToProps(dispatch) {&#10; return {&#10;&#10; };&#10;}&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;export default connect(&#10; mapStateToProps,&#10;)($TM_FILENAME_BASE$);  |  Creates a React component class connected to redux with dispatch
| rsc  |  import React from 'react';&#10;&#10;const $TM_FILENAME_BASE$ = () =&gt; {&#10; return (&#10;  &lt;div&gt;&#10;   $END$&#10;  &lt;/div&gt;&#10; );&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;  |  Creates a stateless React component without PropTypes and ES6 module system |
| rsf  |  import React from 'react';&#10;&#10;function $TM_FILENAME_BASE$(props) {&#10; return (&#10;  $1$&#10; );}&#10;&#10;export default $TM_FILENAME_BASE$;  |  Creates a stateless React component as a named function without PropTypes  |
| rsi  |  import React from 'react';&#10;&#10;const $TM_FILENAME_BASE$ = (props) =&gt; (&#10; $END$&#10;);&#10;&#10;export default $TM_FILENAME_BASE$;  |  Creates a stateless React component without PropTypes and ES6 module system but with Implicit Return and props |
| rwwd  |  class $TM_FILENAME_BASE$ extends React.Component {&#10; constructor(props) {&#10;  super(props);&#10;&#10;  this.state = {};&#10;&#10; }&#10;&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;$TM_FILENAME_BASE$.propTypes = {&#10;&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;  |  Creates a React component class with constructor, empty state, proptypes and export in ES6 module system without imports. (Mostly used when React, Proptypes are provided by webpack provide plugin) |
| scu  |  shouldComponentUpdate(nextProps, nextState) {&#10; $END$&#10;}&#10;  |  Invoked before rendering when new props or state are being received. |
| ssf  |  this.setState((state, props) =&gt; { return { $END$ }});&#10;  |  Performs a shallow merge of nextState into current state |
| sst  |  this.setState($END$);  |  Performs a shallow merge of nextState into current state |
| state  |  this.state.$END$  |  Access component's state |
