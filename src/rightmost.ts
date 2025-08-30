export function rightmost(keys: string): string {
    const keyOrder = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    for (let i = keyOrder.length - 1; i >= 0; i--) {
        if (keys.includes(keyOrder[i])) {
            return keyOrder[i]
        }
    }
    return ''
}