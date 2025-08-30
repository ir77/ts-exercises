export function findstring(text: string, key: string): number {
    let count = 0;
    for (let i = 0; i <= text.length - key.length; i++) {
        if (text.slice(i, i + key.length) === key) {
            count++;
        }
    }
    return count;
}
