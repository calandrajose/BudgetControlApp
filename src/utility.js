export const validateInputs = (input, type) => {
    switch (type) {
        case 'string':
            if (input.trim() !== '') {
                return true
            }
        case 'number':
            if (input >= 1 && !isNaN(input)) {
                return true
            }
    }
    return false;
}

export const showError = (callback) => {
    callback(true)
    setTimeout(() => {
        callback(false)
    }, 1500)
}

export const checkBudget = (budget, remaining) => {
    let classList;
    if ((budget / 4) > remaining) {
        classList = 'alert alert-danger'
    } else if ((budget / 2) > remaining) {
        classList = 'alert alert-warning'
    } else {
        classList = 'alert alert-success'
    }
    return classList;
}