import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css'
const NewExpense = (props) => {
    const [showForm,setShowForm] = useState(false);
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    const addButtonHander = () => {
        setShowForm(true);
    }

    const cancelButtonHandler = () =>{
        setShowForm(false);
    }


    return(<div className='new-expense'>
       {!showForm && <button onClick={addButtonHander}>Add Expense</button> }
       {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} cancelButtonHandler={cancelButtonHandler}/> }
    </div>)
}

export default NewExpense;