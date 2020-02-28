## Introduction

### Create an application or library  

- With create-react-app  
- Using a boilerplace
  - [react-ts-lib](https://github.com/JeanMGirard/react-ts-lib) - Template for a react component library built using Typescript, Rollup, Storybook and Sass


### Conditional Rendering
- Must always return something (null or Jsx element)

```jsx
// if else
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) return <UserGreeting />;
  return <GuestGreeting />;
}
// Conditional
function Mailbox(props) {
  return (
    <div>
      {props.unreadMessages.length > 0 &&
        <h2>You have {props.unreadMessages.length} unread messages.</h2>
      }
    </div>
  )
}
// Fallback
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.;
}
```


### Rendering Multiple Components from a list


```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

function NumberList(props) {
  const listItems = props.numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}
```

*Must always specify a 'key' property*.   
Ids are preferable, but the map function does join the itteration's index (0, 1, 2 ...) Which can very well get the job done. 
Must only be unique per .map().

```jsx
function NamesList(props) {
  return (
    <ul>
      {props.names.map((name, i) => <li key={i}>{name}</li>)}
    </ul>
  );
}
```





