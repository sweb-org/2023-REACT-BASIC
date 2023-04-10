import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      {props.items.length === 0 && (
        <h2 className="expenses-list__fallback">아무것도 안삼;</h2>
      )}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
