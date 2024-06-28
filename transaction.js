import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, filter, sort, setFilter, setSort, onEditTransaction, onDeleteTransaction }) => {
  const filteredTransactions = transactions.filter(transaction => filter === 'all' || transaction.type === filter);
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sort === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sort === 'amount') {
      return a.amount - b.amount;
    }
    return 0;
  });

  return (
    <div className="transaction-list">
      <div className="filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <ul>
        {sortedTransactions.map((transaction) => (
          <TransactionItem 
            key={transaction.id} 
            transaction={transaction} 
            onEditTransaction={onEditTransaction}
            onDeleteTransaction={onDeleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
