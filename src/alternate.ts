export function alternate(s: string): boolean {
    for (let i = 0; i < s.length - 1; i++) {
        const current = s[i]
        const next = s[i + 1]
        if (/[a-zA-Z]/.test(current) && /[a-zA-Z]/.test(next)) {
            return false
        }
        if (/[0-9]/.test(current) && /[0-9]/.test(next)) {
            return false
        }
    }
    return true
}