## About

### What is react


### Core concepts

#### JSX
```jsx
const element = <h1>Hello, world!</h1>;
```

**Considerations**   
**An element must always have only one root node.** (See fragments later)   
```jsx   
const element = (
  <div>This will work</div>
)
const element = (
  <div>This will not work</div>
  <div>This will not work</div>
)
```



#### Components

**Exemple of class component**   
```jsx   
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
*Both these components are equivalent from React’s point of view.*   

**Exemple of functional component**   
```jsx   
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### Properties (props)
* Props are Read-Only

```jsx
// props refers to properties (of the html element)
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
// For exemple, to use the UserInfo component, you could write this html snippet
const user = { name: "some name" };
...
<div className="header">
  <UserInfo user={user}/>
</div>

// This will then transpile to

<div className="header">
  <div className="UserInfo">
    <div className="UserInfo-name">
      some name
    </div>
  </div>
</div>

```

#### States

```jsx   
class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```



### Approach

https://reactjs.org/docs/thinking-in-react.html
