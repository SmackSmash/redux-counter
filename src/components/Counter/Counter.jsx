import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [addition, setAddition] = useState(0);

  const handleDecrement = () => setCount(count - 1);

  const handleIncrement = () => setCount(count + 1);

  const handleAddition = () => {
    setCount(count + Number(addition));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddition();
  };

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <form onSubmit={handleSubmit}>
        <input type='number' value={addition} onChange={e => setAddition(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Counter;
