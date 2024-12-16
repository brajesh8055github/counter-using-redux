import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset,incrementByAmount } from '../src/coutnerSlice';
import { useState } from 'react';

export function Counter() {
    const[amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-[300px] p-5 bg-black rounded-2xl text-center">
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow mb-4"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="block text-white text-xl font-bold mb-4">{count}</span>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow mb-4"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow"
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <input
          type="number"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 my-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow"
          aria-label="Reset value"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}


