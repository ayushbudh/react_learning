import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  
   const handleFilter = (selectedYear) =>{
    setYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === year);
  
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
        selected={year} 
        onHandleFilter={handleFilter} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
        {/* {filteredExpenses.length == 0 ? <p>No Expenses Found</p>:
         (
          filteredExpenses.map((expense) => (
          <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount}   
          date={expense.date}/>
          ))
         )
        } */}
      </Card>
    </div>
  );
}

export default Expenses;