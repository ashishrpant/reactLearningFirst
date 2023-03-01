import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {

  console.log("ExpenseItem Evaluated by react");
  const expenseDate = props.date;
  const expenseAmount = props.amount;
  const title = props.title;

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={expenseDate}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}
  
  export default ExpenseItem;
  