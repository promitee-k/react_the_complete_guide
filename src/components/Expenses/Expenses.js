import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedFilter={selectedFilterHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
