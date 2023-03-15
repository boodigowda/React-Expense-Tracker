import React from "react";
import './ExpenseDate.css'

const ExpenseDate = ({ data }) => {
  let month = data.toLocaleString("en-US", { month: "short" });
  let date = data.toLocaleString("en-US", { day: "2-digit" });
  let year = data.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
