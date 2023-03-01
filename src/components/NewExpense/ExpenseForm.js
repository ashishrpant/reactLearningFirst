import React, {useState} from 'react';
import './NewExpense.css'

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterDate, setEnterDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enterAmount:"",
    //     enterDate:"",
    //     enterTitle: ""
    // });
    
    // const changeTitleHandler = (e) => {
    //     setUserInput((prevState) =>{
    //         return { ...prevState,enterTitle:e.target.value };
    //     })
    // }
    // const changeAmountHandler = (e) => {
    //     setUserInput((prevState) =>{
    //         return { ...prevState,enterAmount:e.target.value };
    //     })
    // }
    // const changeDateHandler = (e) => {
    //     setUserInput((prevState) =>{
    //         return { ...prevState,enterDate:e.target.value };
    //     })
    // }

    const changeTitleHandler = (e) => {
        setEnterTitle(e.target.value);
    }
    const changeAmountHandler = (e) => {
        setEnterAmount(e.target.value);
    }
    const changeDateHandler = (e) => {
        setEnterDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnterTitle("");
        setEnterAmount("");
        setEnterDate("");
        props.cancelButtonHandler(false);
    }
   
    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input
                type="text"
                value = {enterTitle}
                onChange={changeTitleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input number="text"
                min="0.01" step="0.01" 
                value = {enterAmount}
                onChange={changeAmountHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date"
                min="2019-01-01" 
                max="2022-12-31"
                value = {enterDate}  
                onChange={changeDateHandler}/>
            </div>
        </div>

        <div className='new-expense__actions'>
            <button type="button" onClick={props.cancelButtonHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>

        </form>
    );
}

export default ExpenseForm;