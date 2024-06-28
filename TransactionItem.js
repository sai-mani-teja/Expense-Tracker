import React from 'react';

const TransactionItem = ({ transaction, onEditTransaction, onDeleteTransaction }) => {
  return (
    <li className="transaction-item">
      <div>{transaction.date}</div>
      <div>{transaction.category}</div>
      <div>{transaction.type === 'income' ? '+' : '-'}{transaction.amount.toFixed(2)}</div>
      <div>
        <button className='edit-button' onClick={() => onEditTransaction(transaction.id)}>Edit</button>
        <button className='delete-button' onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TransactionItem;