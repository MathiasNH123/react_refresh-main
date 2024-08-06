import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?
/* fejlen her var at vi slet ikke brugte vores "setCount" man kan løse det ved at erstate det med "setCount(count + 1)" i stedet for "count = count + 1"*/

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    count = count + 1;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
