import React from 'react';
import PropTypes from 'prop-types'

const Expense = ({amount, description}) => (
        <li id='expenses'>     
            <p>{description} <span className='expense'>{amount}</span></p>
        </li>
    );

    Expense.propTypes = {
        amount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    }

export default Expense;