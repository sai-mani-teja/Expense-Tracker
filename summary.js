import React from 'react';

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  
  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="summary">
      <div>Total Income: {totalIncome.toFixed(2)}</div>
      <div>Total Expense: {totalExpense.toFixed(2)}</div>
      <div>Balance: {balance.toFixed(2)}</div>
    </div>
  );
};

export default Summary;
