import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  const [title, SetTitle] = useState(expenses.title);
  // let title = expenses.title
  let clickHandler = () => {
    SetTitle("Boodi");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate data={expenses.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expenses.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
