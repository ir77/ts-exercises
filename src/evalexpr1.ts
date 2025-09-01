export function evalexpr1(expr: string): number {
    // '1+1' を [1, '+', 1] に分割する
    // '12+345' を [12, '+', 345] に分割する
    const tokens = expr.split(/(\+|\-|\*)/).map(token => {
        const n = Number(token)
        return isNaN(n) ? token : n
    })

    const stack: (number | string)[] = []
}

function calculate(operator: string): ((left: number, right: number) => number) {
    switch (operator) {
        case '+': return plus
        case '-': return minus
        case '*': return multiply
        case '/': return devide
        default: throw new Error(`不明な演算子: ${operator}`)
    }
}

function plus(left: number, right: number): number {
    return left + right
}

function minus(left: number, right: number): number {
    return left - right
}

function multiply(left: number, right: number): number {
    return left * right
}

function devide(left: number, right: number): number {
    return left / right
}


