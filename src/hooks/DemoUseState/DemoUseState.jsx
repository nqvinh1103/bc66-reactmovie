import React, { useState } from "react";
import Child from "./Child";

export default function DemoUseState() {
  const [state, setState] = useState(1);
  const [message, setMessage] = useState("Hello fen");
  
  const handleIncrease = () => {
    setState((prev) => {
      return prev + 1;
    });
    setState((prev) => {
      return prev + 1;
    });
    setState((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h4>Count: {state}</h4>
      <button className="bg-slate-500 rounded p-2" onClick={handleIncrease}>
        Increase
      </button>
      <hr />
      <Child
        message={message}
        onChangeMessage={(msg) => setMessage(msg)}
      />
    </div>
  );
}
