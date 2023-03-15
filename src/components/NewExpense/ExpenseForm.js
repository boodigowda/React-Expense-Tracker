import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ receiveFormData }) => {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [formvisible, setFormVisible] = useState(false);
  let titleChangeHandler = (e) => {
    // setData({
    //   ...data,
    //   title: e.target.value,
    // });
    setData((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  let amountChangeHandler = (e) => {
    setData({
      ...data,
      amount: e.target.value,
    });
  };
  let dateChangeHandler = (e) => {
    setData({
      ...data,
      date: e.target.value,
    });
  };
  let formSubmit = (e) => {
    data.date = new Date(data.date);
    e.preventDefault();

    receiveFormData(data);

    // console.log(data);
    setData({
      title: "",
      date: "",
      amount: "",
    });
    setFormVisible(false)
  };
  let onNewExpenseClick = () =>{
    setFormVisible(true)
  }
  return (
    <div>
      {formvisible ? (
        <form onSubmit={formSubmit}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={data.title}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={data.amount}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="">Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-05-31"
                value={data.date}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <div>
          <button onClick={onNewExpenseClick}>New Expense</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;
