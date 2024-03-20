import { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, add } from '../../actions';
import './Counter.css';

const Counter = ({ count, decrement, increment, reset, add }) => {
  const [addition, setAddition] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <form onSubmit={handleSubmit}>
        <input type='number' value={addition} onChange={e => setAddition(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps, { increment, decrement, reset, add })(Counter);
