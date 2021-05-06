import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  
   const handleFilter = (selectedYear) =>{
    setYear(selectedYear);
  }
  const result = props.items.filter(expense => expense.date.getFullYear() == year);
  return (
    <div>
      
      <Card className="expenses">
      
      <ExpensesFilter 
      selected={year} 
      onHandleFilter={handleFilter} />
        
        {result.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}   
        date={expense.date}/>
        ))}
     
      </Card>
    </div>
  );
}

export default Expenses;