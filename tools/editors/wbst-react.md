### React Live templates

| Shortcut | Code | Description | 
| -------- | ---- | ----------- |
| bnd    |    this.$1$ = this.$1$.bind(this);$END$    |    Binds the this of a method. To be used inside a constructor |
| cdc    |    componentDidCatch(error, info) {&#10; $END$&#10;}&#10;    |    Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them |
| cdm    |    componentDidMount() {&#10; $END$&#10;}&#10;    |    Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. |
| cdup    |    componentDidUpdate(prevProps, prevState) {&#10; $END$&#10;}&#10;    |    Invoked immediately after the component's updates are flushed to the DOM. |
| con    |    constructor(props) {&#10; super(props);&#10; $END$&#10;}&#10;    |    Adds a default constructor for the class that contains props as arguments |
| conc    |    constructor(props, context) {&#10; super(props, context);&#10; $END$&#10;}&#10;    |    Adds a default constructor for the class that contains props and context as arguments |
| cwm    |    componentWillMount() {&#10; $END$&#10;}&#10;    |    Invoked once, both on the client and server, immediately before the initial rendering occurs |
| cwr    |    componentWillReceiveProps(nextProps) {&#10; $END$&#10;}&#10;    |    Invoked when a component is receiving new props. This method is not called for the initial render. [DEPRECATION NOTE]: This method is deprecated in React 16.3 |
| cwun    |    componentWillUnmount() {&#10; $END$&#10;}&#10;    |    Invoked immediately before a component is unmounted from the DOM. |
| cwup    |    componentWillUpdate(nextProps, nextState) {&#10; $END$&#10;}&#10;    |    Invoked immediately before rendering when new props or state are being received. [DEPRECATION NOTE]: This method is deprecated in React 16.3 |
| disp    |    function mapDispatchToProps(dispatch) {&#10; return {&#10; }&#10;}    |    Adds the redux mapDispatchToProps function |
| est    |    this.state = {&#10; $1$&#10;};    |    Creates empty state object. To be used in a constructor. |
| fcc    |    // @flow&#10;import * as React from 'react';&#10;type Props = {&#10; $END$&#10;};&#10;type State = {&#10; $1$&#10;};&#10;export class $TM_FILENAME_BASE$ extends React.Component&lt;Props, State&gt;{&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    &#10;   &lt;/div&gt;&#10;  );&#10; };&#10;};    |    Creates a React component class with FlowTypes |
| fsc    |    // @flow &#10;import * as React from 'react';&#10;type Props = {&#10; $END$&#10;};&#10;export const $TM_FILENAME_BASE$ = (props: Props) =&gt; {&#10; return (&#10;  &lt;div&gt;&#10;   &#10;  &lt;/div&gt;&#10; );&#10;};    |    Creates a stateless React component with FlowTypes and ES6 module system |
| fsf    |    // @flow&#10;import * as React from 'react';&#10;type Props = {&#10; $END$&#10;};&#10;export function $TM_FILENAME_BASE$(props: Props) {&#10; return (&#10;  &lt;div&gt;&#10;   &#10;  &lt;/div&gt;&#10; );&#10;};    |    Creates a stateless React component as a named function with FlowTypes |
| gdsfp    |    static getDerivedStateFromProps(nextProps, prevState) {&#10; $END$&#10;}&#10;    |    Invoked after a component is instantiated as well as when it receives new props. |
| gsbu    |    getSnapshotBeforeUpdate(prevProps, prevState) {&#10; $END$&#10;}&#10;    |    Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values |
| props    |    this.props.$END$    |    Access component's props |
| pta    |    PropTypes.array,    |    Array prop type |
| ptao    |    PropTypes.arrayOf($END$),    |    An array of a certain type |
| ptaor    |    PropTypes.arrayOf($END$).isRequired,    |    An array of a certain type required |
| ptar    |    PropTypes.array.isRequired,    |    Array prop type required |
| ptb    |    PropTypes.bool,    |    Bool prop type |
| ptbr    |    PropTypes.bool.isRequired,    |    Bool prop type required |
| pte    |    PropTypes.oneOf(['$END$']),    |    Prop type limited to specific values by treating it as an enum |
| ptel    |    PropTypes.element,    |    React element prop type |
| ptelr    |    PropTypes.element.isRequired,    |    React element prop type required |
| pter    |    PropTypes.oneOf(['$END$']).isRequired,    |    Prop type limited to specific values by treating it as an enum required |
| ptet    |    PropTypes.oneOfType([&#10; $END$&#10;]),    |    An object that could be one of many types |
| ptetr    |    PropTypes.oneOfType([&#10; $END$&#10;]).isRequired,    |    An object that could be one of many types required |
| ptf    |    PropTypes.func,    |    Func prop type |
| ptfr    |    PropTypes.func.isRequired,    |    Func prop type required |
| pti    |    PropTypes.instanceOf($END$),    |    Is an instance of a class prop type |
| ptir    |    PropTypes.instanceOf($END$).isRequired,    |    Is an instance of a class prop type required |
| ptn    |    PropTypes.number,    |    Number prop type |
| ptnd    |    PropTypes.node,    |    Anything that can be rendered: numbers, strings, elements or an array |
| ptndr    |    PropTypes.node.isRequired,    |    Anything that can be rendered: numbers, strings, elements or an array required |
| ptnr    |    PropTypes.number.isRequired,    |    Number prop type required |
| pto    |    PropTypes.object,    |    Object prop type |
| ptoo    |    PropTypes.objectOf($END$),    |    An object with property values of a certain type |
| ptoor    |    PropTypes.objectOf($END$).isRequired,    |    An object with property values of a certain type required |
| ptoos    |    PropTypes.objectOf(PropTypes.shape($END$)),    |    An object whose keys are known ahead of time |
| ptoosr    |    PropTypes.objectOf(PropTypes.shape($END$)).isRequired,    |    An object whose keys are known ahead of time required |
| ptor    |    PropTypes.object.isRequired,    |    Object prop type required |
| pts    |    PropTypes.string,    |    String prop type |
| ptsh    |    PropTypes.shape({&#10; $END$&#10;}),    |    An object taking on a particular shape |
| ptshr    |    PropTypes.shape({&#10; $END$&#10;}).isRequired,    |    An object taking on a particular shape required |
| ptsr    |    PropTypes.string.isRequired,    |    String prop type required |
| rcc    |    import React, { Component } from 'react';&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a React component class with ES6 module system |
| rccp    |    import React, { Component } from 'react';&#10;import PropTypes from 'prop-types';&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;$TM_FILENAME_BASE$.propTypes = {&#10;&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a React component class with PropTypes and ES6 module system
| rcfc    |    import React, { Component } from 'react';&#10;import PropTypes from 'prop-types';&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; constructor(props) {&#10;  super(props);&#10;&#10; }&#10;&#10; componentWillMount() {&#10;&#10; }&#10;&#10; componentDidMount() {&#10;&#10; }&#10;&#10; componentWillReceiveProps(nextProps) {&#10;&#10; }&#10;&#10; shouldComponentUpdate(nextProps, nextState) {&#10;&#10; }&#10;&#10; componentWillUpdate(nextProps, nextState) {&#10;&#10; }&#10;&#10; componentDidUpdate(prevProps, prevState) {&#10;&#10; }&#10;&#10; componentWillUnmount() {&#10;&#10; }&#10;&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;$TM_FILENAME_BASE$.propTypes = {&#10;&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a React component class with PropTypes and all lifecycle methods and ES6 module system
| rcjc    |    class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;    |    Creates a React component class with ES6 module system
| rdp    |    $1$.defaultProps = {&#10; $2$&#10;};    |    Creates empty defaultProps declaration
| ren    |    render() {&#10; return (&#10;  &lt;div&gt;&#10;   $END$&#10;  &lt;/div&gt;&#10; );&#10;}    |    When called, it should examine this.props and this.state and return a single child element.
| rpc    |    import React, { PureComponent } from 'react';&#10;import PropTypes from 'prop-types';&#10;&#10;class $TM_FILENAME_BASE$ extends PureComponent {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;$TM_FILENAME_BASE$.propTypes = {&#10;&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a React pure component class with PropTypes and ES6 module system
| rpt    |    $1$.propTypes = {&#10; $2$&#10;};    |    Creates empty propTypes declaration
| rrc    |    import React, { Component } from 'react';&#10;import { connect } from 'react-redux';&#10;&#10;function mapStateToProps(state) {&#10; return {&#10;&#10; };&#10;}&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;export default connect(&#10; mapStateToProps,&#10;)($TM_FILENAME_BASE$);    |    Creates a React component class connected to redux
| rrdc    |    import React, { Component } from 'react';&#10;import { connect } from 'react-redux';&#10;&#10;function mapStateToProps(state) {&#10; return {&#10;&#10; };&#10;}&#10;&#10;function mapDispatchToProps(dispatch) {&#10; return {&#10;&#10; };&#10;}&#10;&#10;class $TM_FILENAME_BASE$ extends Component {&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;export default connect(&#10; mapStateToProps,&#10;)($TM_FILENAME_BASE$);    |    Creates a React component class connected to redux with dispatch
| rsc    |    import React from 'react';&#10;&#10;const $TM_FILENAME_BASE$ = () =&gt; {&#10; return (&#10;  &lt;div&gt;&#10;   $END$&#10;  &lt;/div&gt;&#10; );&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a stateless React component without PropTypes and ES6 module system |
| rscp    |    import React from 'react';&#10;import PropTypes from 'prop-types';&#10;&#10;const $TM_FILENAME_BASE$ = props =&gt; {&#10; return (&#10;  &lt;div&gt;&#10;   &#10;  &lt;/div&gt;&#10; );&#10;};&#10;&#10;$TM_FILENAME_BASE$.propTypes = {&#10; $END$&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a stateless React component with PropTypes and ES6 module system |
| rsf    |    import React from 'react';&#10;&#10;function $TM_FILENAME_BASE$(props) {&#10; return (&#10;  $1$&#10; );}&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a stateless React component as a named function without PropTypes  |
| rsfp    |    import React from 'react';&#10;import PropTypes from 'prop-types';&#10;&#10;$TM_FILENAME_BASE$.propTypes = {&#10; $END$&#10;};&#10;&#10;function $TM_FILENAME_BASE$(props) {&#10; return (&#10;  $1$&#10; );&#10;}&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a stateless React component as a named function with PropTypes |
| rsi    |    import React from 'react';&#10;&#10;const $TM_FILENAME_BASE$ = (props) =&gt; (&#10; $END$&#10;);&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a stateless React component without PropTypes and ES6 module system but with Implicit Return and props |
| rwwd    |    class $TM_FILENAME_BASE$ extends React.Component {&#10; constructor(props) {&#10;  super(props);&#10;&#10;  this.state = {};&#10;&#10; }&#10;&#10; render() {&#10;  return (&#10;   &lt;div&gt;&#10;    $END$&#10;   &lt;/div&gt;&#10;  );&#10; }&#10;}&#10;&#10;$TM_FILENAME_BASE$.propTypes = {&#10;&#10;};&#10;&#10;export default $TM_FILENAME_BASE$;    |    Creates a React component class with constructor, empty state, proptypes and export in ES6 module system without imports. (Mostly used when React, Proptypes are provided by webpack provide plugin) |
| scu    |    shouldComponentUpdate(nextProps, nextState) {&#10; $END$&#10;}&#10;    |    Invoked before rendering when new props or state are being received. |
| ssf    |    this.setState((state, props) =&gt; { return { $END$ }});&#10;    |    Performs a shallow merge of nextState into current state |
| sst    |    this.setState($END$);    |    Performs a shallow merge of nextState into current state |
| state    |    this.state.$END$    |    Access component's state |
