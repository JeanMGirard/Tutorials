## References

### Class Lifecycle Methods
```jsx   
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidCatch(error, errorInfo) {}
  shouldComponentUpdate(nextProps, nextState, nextContext) {}
}
```



MAIN CONCEPTS
Introducing JSX
Rendering Elements
Components and Props
State and Lifecycle
Handling Events
Conditional Rendering
Lists and Keys
Forms
Lifting State Up
Composition vs Inheritance
Thinking In React


ADVANCED GUIDES
Fragments
Accessibility
Context
Error Boundaries
Forwarding Refs
Higher-Order Components
Integrating with Other Libraries
JSX In Depth
Optimizing Performance
Profiler
React Without ES6
React Without JSX
Reconciliation
Refs and the DOM
Render Props
Static Type Checking
Strict Mode
Typechecking With PropTypes
Uncontrolled Components
Web Components
Code-Splitting
Portals

API REFERENCE
React
React.Component
ReactDOM
ReactDOMServer
DOM Elements
SyntheticEvent
Test Utilities
Test Renderer
JS Environment Requirements
Glossary

HOOKS
Introducing Hooks
Hooks at a Glance
Using the State Hook
Using the Effect Hook
Rules of Hooks
Building Your Own Hooks
Hooks API Reference
Hooks FAQ


TESTING
Testing Overview
Testing Recipes
Testing Environments


