import React, { useState, useEffect } from "react";
import './ExpenseForm.css';

const ExpenseForm = ({ onAddTransaction, editingTransaction }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("expense");

  useEffect(() => {
    if (editingTransaction) {
      setAmount(editingTransaction.amount);
      setCategory(editingTransaction.category);
      setDate(editingTransaction.date);
      setType(editingTransaction.type);
    } else {
      resetForm();
    }
  }, [editingTransaction]);

  const resetForm = () => {
    setAmount('');
    setCategory('');
    setDate('');
    setType('expense');
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) {
      alert('Please fill in all the fields');
      return;
    }

    const newTransaction = { amount: parseFloat(amount), category, date, type };
    onAddTransaction(newTransaction);
    resetForm();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="add-amount">
          <label>Enter the Transaction Amount
            <input
              type='number'
              placeholder="Enter Amount"
              value={amount}
              required
              min="0"
              onChange={handleAmountChange}
            />
          </label>
        </div>
        <div className="add-category">          
          <label>Enter the Category
            <input 
              type='text'
              placeholder="Enter Category"
              value={category}
              required
              onChange={handleCategoryChange}
            />
          </label>
        </div>
        <div className="add-date">          
          <label>Enter the Date
            <input 
              type='date'
              placeholder="Enter Date"
              value={date}
              required
              onChange={handleDateChange}
            />
          </label>
        </div>
        <div className="transaction-type">
          <label>Type
            <select value={type} required onChange={handleTypeChange}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </label>
        </div>
        <button type="submit" className="add-button">
          {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
