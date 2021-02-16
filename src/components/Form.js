import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import {validateInputs, showError} from '../utility'

const Form = ({setBudget, setRemainingBudget, setBudgetIsDefined}) => {
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(false)

    const onSubmitHandler = (e)=>{
        e.preventDefault();

        if(validateInputs(amount, 'number')){
            setBudget(amount)
            setRemainingBudget(amount)
            setBudgetIsDefined(true)
        }else{
            showError(setError)
        }
    }

    return (
        <Fragment>
            <h2>Set Your Weekly Budget</h2>
            {error? <Error message='Your initial budget can not be less than USD 1'/>:null}
            <form onSubmit={onSubmitHandler}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder='Set Your Weekly Budget'
                    onChange={(e) => { setAmount(parseFloat(e.target.value)) }}
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Define Budget'
                />
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    setRemainingBudget: PropTypes.func.isRequired,
    setBudget: PropTypes.func.isRequired,
    setBudgetIsDefined: PropTypes.func.isRequired ,
}

export default Form;
