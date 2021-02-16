import React from 'react';
import Expense from './Expense'
import PropTypes from 'prop-types'

const Expenses = ({expenses}) => (
        <div className='expense-history'>
            <h2>History</h2>
            {expenses.map(expense=>(
                <Expense 
                    key={expense.id}
                    description={expense.description}
                    amount={expense.amount}
                    />
                )
            )}
        </div>
    );

Expenses.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default Expenses;