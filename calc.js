function calc(a, b, operator) {
    const isNotValid = (typeof a != 'number') || (typeof b != 'number');
    if (isNotValid) {
        return 'Error!'
    }
    let result = calcNumber(a, b, operator)
    return result
}
function calcNumber(a, b, operator) {
    let operations = {
        sum: a + b,
        min: a - b,
        multi: a * b,
        div: a / b,
    }
    if (!operations[operator]) {
        return 'Unknown operator'
    } else if (operations[operator] === Infinity) {
        return 'Division by zero!'
    }
    else {
        return operations[operator];
    }
}

console.log(calc(6, 0, 'div'));






