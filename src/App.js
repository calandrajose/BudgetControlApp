import Form from "./components/Form";
import { useState, useEffect } from "react";
import ExpensesForm from "./components/Expenses/ExpensesForm";
import Expenses from "./components/Expenses/Expenses";
import BudgetControl from './components/BudgetControl'

function App() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [budgetIsDefined, setBudgetIsDefined] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const onAddingNewExpenseHandler = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="main-content content">
          {!budgetIsDefined ? (
            <Form
              setBudget={setBudget}
              setRemainingBudget={setRemainingBudget}
              setBudgetIsDefined={setBudgetIsDefined}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <ExpensesForm
                  onAddingNewExpense={onAddingNewExpenseHandler}
                  setRemainingBudget={setRemainingBudget}
                  setBudgetIsDefined={setBudgetIsDefined}
                  budget={budget}
                  remainingBudget={remainingBudget}
                />
                <BudgetControl 
                  budget={budget}
                  remainingBudget={remainingBudget}
                  />
              </div>
              <div className="one-half column">
                <Expenses expenses={expenses} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
