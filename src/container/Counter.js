import React, { useState } from "react";
import CounterControl from "../components/CounterControl";
import CounterOutput from "../components/CounterOutput";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        setCounter(counter + 1);
        break;
      case "dec":
        setCounter(counter - 1);
        break;
      case "add":
        setCounter(counter + value);
        break;
      case "sub":
        setCounter(counter - value);
    }
  };

  return (
    <div>
      <CounterControl />
      <CounterOutput value={counter} />
    </div>
  );
};

export default Counter;
