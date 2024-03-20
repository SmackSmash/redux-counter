import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [addition, setAddition] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='counter'>
      <h1>{}</h1>
      <button onClick=''>Decrement</button>
      <button onClick=''>Increment</button>
      <button onClick=''>Reset</button>
      <form onSubmit={handleSubmit}>
        <input type='number' value={addition} onChange={e => setAddition(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Counter;
