import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decerement, increment } from "./feature/counterslice";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dishpatch = useDispatch();
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dishpatch(decerement())}>increment</button>
      <button onClick={() => dishpatch(increment())}>increment</button>
    </div>
  );
};

export default App;
