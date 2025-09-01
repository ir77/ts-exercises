export function splitto(text: string): string[] {
    let inQuote = false
    let result = ''
    for (const char of text) {
        if (char === '「') {
            inQuote = true
            result += char
        } else if (char === '」') {
            inQuote = false
            result += char
        } else if (char === 'と' && inQuote) {
            result += '＊' // 区切り文字を一時的に置換
        } else {
            result += char
        }
    }
    return result
        .split('と')
        .map(part => part.replace(/＊/g, 'と') // 置換を元に戻す
        .replace(/「|」/g, '')) // 引用符を削除
}
