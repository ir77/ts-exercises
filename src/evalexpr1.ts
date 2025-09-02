function performOperation(operator: string, left: number, right: number): number {
    switch (operator) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return left / right;
        default: return 0; // 正常系ではここは通りません
    }
}

function convertToPostfix(tokens: string[]): (string | number)[] {
    const outputQueue: (string | number)[] = [];
    const operatorStack: string[] = [];

    for (const token of tokens) {
        if (!isNaN(parseFloat(token))) {
            outputQueue.push(parseFloat(token));
        } else {
            // スタックの頂上にある演算子が、現在のものより優先度が高いか等しい限りループ
            while (operatorStack.length > 0) {
                const topOfStack = operatorStack[operatorStack.length - 1];
                // スタックの頂上が「+」か「-」で、現在のトークンが「*」か「/」の場合、
                // 現在のトークンの方が優先度が高いので、ループを抜ける
                if ((topOfStack === '+' || topOfStack === '-') && (token === '*' || token === '/')) {
                    break;
                }
                outputQueue.push(operatorStack.pop()!);
            }
            operatorStack.push(token);
        }
    }

    outputQueue.push(...operatorStack.reverse());
    return outputQueue;
}

function evaluatePostfix(postfixQueue: (string | number)[]): number {
    const calculationStack: number[] = [];

    for (const token of postfixQueue) {
        if (typeof token === 'number') {
            calculationStack.push(token);
        } else {
            const rightOperand = calculationStack.pop()!;
            const leftOperand = calculationStack.pop()!;
            const result = performOperation(token, leftOperand, rightOperand);
            calculationStack.push(result);
        }
    }
    return calculationStack[0];
}


export function evalexpr1(expression: string): number {
    // ステップ1: 字句解析 (Tokenization)
    // 例: '1+2*3' -> ['1', '+', '2', '*', '3']
    const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g)!;

    // ステップ2: 中置記法から後置記法への変換 (Shunting-yard algorithm)
    // 例: ['1', '+', '2', '*', '3'] -> [1, 2, 3, '*', '+']
    const postfixQueue = convertToPostfix(tokens);

    // ステップ3: 後置記法の評価 (Evaluation)
    return evaluatePostfix(postfixQueue);
}