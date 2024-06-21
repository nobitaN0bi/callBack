import React, { useCallback, useState } from 'react';

function App() {
  const [input,setInput]=useState("");
  const [count,setCount]=useState(0);
  const incrementCount=useCallback(()=> setCount(count+1),[count]);
  return (
    <div className="App">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={incrementCount}>Increment count</button>
      <h3>Input text:{input}</h3>
      <h3> count: {count} </h3>
      <hr />
      <ChildComponent count={count} onClick={incrementCount}/>
    </div>
  );
}

const ChildComponent=React.memo(({count, onClick}) => { 
  console.log("child component is rendering");
  return (
    <div>
      <h2> this is a child component</h2>
      <button onClick={onClick}>Increment</button>
      <h4> count:{count}</h4>
    </div>
  );
});

export default App;