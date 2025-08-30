export function badparen(text: string): number {
    const stack: number[] = []
    for (let i = 0; i < text.length; i++) {
        const char = text[i]
        if (char === '(') {
            stack.push(i)
        } else if (char === ')') {
            if (stack.length === 0) {
                return i
            }
            stack.pop()
        }
    }
    if (stack.length > 0) {
        return stack[stack.length - 1];
    }
    return -1
}
