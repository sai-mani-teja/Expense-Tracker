import React, { useState } from 'react';
import ExpenseForm from './Expenseform.js';
import TransactionList from './transaction.js';
import Summary from './summary.js';
import TransactionItem from './TransactionItem.js';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');
  const [editingTransaction, setEditingTransaction] = useState(null);

  const addTransaction = (transaction) => {
    if (editingTransaction) {
      setTransactions(transactions.map((t) => 
        t.id === editingTransaction.id ? { ...transaction, id: t.id } : t
      ));
      setEditingTransaction(null);
    } else {
      setTransactions([...transactions, { ...transaction, id: Date.now() }]);
    }
  };

  const editTransaction = (id) => {
    const transaction = transactions.find((t) => t.id === id);
    setEditingTransaction(transaction);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddTransaction={addTransaction} editingTransaction={editingTransaction} />
      <Summary transactions={transactions} />
      <TransactionList 
        transactions={transactions} 
        filter={filter} 
        sort={sort} 
        setFilter={setFilter} 
        setSort={setSort} 
        onEditTransaction={editTransaction}
        onDeleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
