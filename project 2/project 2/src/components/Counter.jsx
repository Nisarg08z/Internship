import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [auth1, setAuth1] = useState(false);

  const handleIncrement = () => {
    setTimeout(() => {
        //setCount(count + 1);
        setCount((currvalue) => currvalue + 1)
    }, 2000);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const auth = () => {
    setAuth1(!auth1);
  };

  return (
    <div>
      {auth1 && <p>Count: {count}</p>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={auth}>Toggle</button>
    </div>
  );
};

export default Counter;