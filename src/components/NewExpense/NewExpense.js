import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({addExpenseHandler}) => {
  const receiveFormData = (data) =>{
      const expenseData = {
        ...data,
        id:Math.random().toString()
      }
      if(expenseData !== ""){
        addExpenseHandler(expenseData);
      }
  }
  

  return (
    <div className='new-expense'>
        <ExpenseForm receiveFormData={receiveFormData}/>
    </div>
  )
}

export default NewExpense