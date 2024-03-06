import React, { useState } from "react";
function Counter() {
  // let count = 7; this will not do anyything to update the dom
  const [count, setCount] = useState(0); 
  // useState tracks if the count const is being modified by
  // setCount mutator from useState Hooks. If the const changed then update the dom.
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}>
        Up
      </button>
      <button
        onClick={() => setCount(count - 1)}>
        Down
      </button>
      {/* <button
        onClick={() => { count++; console.log(count); }}>
        Up
      </button>
      <button
        onClick={() => { count--; console.log(count); }}>
        Down
      </button> */}
    </div>
  );
}
export default Counter;