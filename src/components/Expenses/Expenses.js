import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const expenses = props.Expenses;

    const [filterYear,setFilterYear] = useState('2020');

    const changeExpenseFilterHandler = (selectedYear) =>  {
        setFilterYear(selectedYear);
        console.log(filterYear,"test");
    } 

    const filteredExpenses = expenses.filter(expense =>{
            return expense.date.getFullYear().toString() === filterYear
    });

    

    return(
        <div>
        <Card className ="expenses">
            <ExpensesFilter
                selected={filterYear}
                onChangeExpenseFilter={changeExpenseFilterHandler}
             /> 
            
            <ExpensesChart expenses = {filteredExpenses} />
            {<ExpenseList items = {filteredExpenses}/>}
        </Card>
        </div>
    )
}

export default Expenses;