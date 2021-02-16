import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { validateInputs, showError } from '../../utility';
import Error from '../Error'
import shortid from 'shortid'

const ExpensesTracker = ({ setRemainingBudget, remainingBudget ,onAddingNewExpense}) => {

    const [expense, setExpense] = useState({
        amount: 0,
        description: ''
    })
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (validateInputs(expense.amount, 'number') && validateInputs(expense.description, 'string')) {
            const remaining = remainingBudget - expense.amount;

            if (remaining >= 0) {
                setRemainingBudget(remaining);
                const newExpense = {
                    amount: expense.amount,
                    description: expense.description,
                    id: shortid.generate()
                }
                onAddingNewExpense(newExpense)
                setExpense({amount: "", description: ''})
            } else {
                setErrorMessage('This is more expensive than your remaining funds')
                showError(setError)
            }

        } else {
            setErrorMessage(validateInputs(expense.amount, 'number') ? "There's something wrong with the description" : "The amount can't be less than USD 1")
            showError(setError)
        }
    }

    return (
        // {error? <Error message=''/>:null}
        <form onSubmit={onSubmitHandler}>
            <h2>Add your expenses</h2>
            {error ? <Error message={errorMessage} /> : null}
            <label>Description</label>
            <input
                type="text"
                className="u-full-width"
                placeholder='e.g. Beer'
                name='description'
                value={expense.description}
                onChange={(e) => {
                    setExpense({
                        ...expense,
                        description: e.target.value
                    })
                }}
            />
            <label>Amount</label>
            <input
                type="number"
                className="u-full-width"
                placeholder='e.g. USD 5'
                name='amount'
                value={expense.amount}
                onChange={(e) => {
                    setExpense({
                        ...expense,
                        amount: parseFloat(e.target.value)
                    })
                }}
            />
            <input
                type='submit'
                className='button-primary u-full-width'
                value='Add Expense'
            />
        </form>
    );
};

ExpensesTracker.propTypes = {
    setRemainingBudget: PropTypes.func.isRequired,
    remainingBudget: PropTypes.number.isRequired,
    onAddingNewExpense: PropTypes.func.isRequired ,
}

export default ExpensesTracker;