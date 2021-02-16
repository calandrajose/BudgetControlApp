import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import {checkBudget} from '../utility' 

const BudgetControl = ({budget, remainingBudget}) =>(
        <div>
            <Fragment>
                <div className='alert alert-primary'>
                    Budget: {budget}
                </div>
                <div className={checkBudget(budget, remainingBudget)}>
                    Remaining: {remainingBudget}
                </div>
            </Fragment>
        </div>
    );

    BudgetControl.propTypes = {
        budget: PropTypes.number.isRequired,
    }
export default BudgetControl;