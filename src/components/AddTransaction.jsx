import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const changeText = (e) => {
    setText(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            Text
            <input
              type="text"
              placeholder="Enter text..."
              value={text}
              onChange={changeText}
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            {' '}
            <br />
            (negative - expense, positive - income)
          </label
          >
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={changeAmount}
          />
        </div>
        <button type="submit" className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
