function calc(a, b, operator) {
    const isNotValid = typeof a !== 'number' || typeof b !== 'number'
    const operations = {
        sub: a - b,
        sum: a + b,
        mult: a * b,
        div: a / b,
    }
    if (isNotValid) {
        return 'Enter a number'
    } else if (operator === 'div' && b === 0) {
        return 'Division by zero'
    } else if (operations[operator] === undefined) {
        return 'Uncorrected operator'
    } else if (operator in operations) {
        return operations[operator]
    }
}

console.log(calc(0, 0, 'mult'))