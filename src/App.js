import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data=>setComments(data))
  },[])
  return (
    <div>
      <h3>Load Comments</h3>
      {
        comments.map(comment=> <Comment name={Comment.name} email={comment.email}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div style={{backgroundColor:'skyblue',border:'3px solid blue'}}>
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleReset = () => setCount(0);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      
    </div>
  )
}

export default App;
