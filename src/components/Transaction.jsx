import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  const dynamicClass = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={dynamicClass}>
      {transaction.text}
      <span>
        {sign}
        $
        {Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        type="button"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default Transaction;
