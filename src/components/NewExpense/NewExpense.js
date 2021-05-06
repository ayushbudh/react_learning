import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [displayForm, setDisplayForm] = useState(false);

  const handleStateChange = () =>{
    setDisplayForm(true);
  }

  return (
    <div className='new-expense'>
      {displayForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStateChange={setDisplayForm} /> : 
      <form className='new-expense__action_btn' onSubmit={handleStateChange}>
        <button type='submit'>Add New Expenses</button>
      </form>
      }
    </div>
  );
};

export default NewExpense;