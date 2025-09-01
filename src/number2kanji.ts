export function number2kanji(x: number): string {
    if (x === 0) return '零'

    // 5678912345 という数字を [5,6,7,8,9,1,2,3,4,5] のように配列に区切る
    const digits = String(x).split('').map(d => Number(d))

    // 前出の配列を [[5,6],[7,8,9,1],[2,3,4,5]] のように4桁ずつ区切る
    const parts: number[][] = []
    for (let i = digits.length; i > 0; i -= 4) {
        parts.push(digits.slice(Math.max(0, i - 4), i))
    }
    parts.reverse()
    console.log(parts);

    // 各部分を漢数字に変換して連結する
    return parts.map((part, i) => {
        const partKanji = part.map((d, j) => {
            if (d === 0) return '' // 0は無視
            const pos = part.length - j - 1
            if (d === 1 && pos > 0) return digitToKanji(pos) // 1は位取り記号のみ
            return singleDigitToKanji(d) + digitToKanji(pos) // それ以外
        }).join('')
        if (partKanji === '') return ''
        const pos = parts.length - i - 1
        return partKanji + largeDigitToKanji(pos) // 大きい位取り記号
    }).join('')
}

function singleDigitToKanji(d: number): string {
    const kanjiDigits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    return kanjiDigits[d]
}

function digitToKanji(d: number): string {
    const kanjiDigits = [
        '', '十', '百', '千', 
    ]
    return kanjiDigits[d]
}

function largeDigitToKanji(d: number): string {
    const kanjiDigits = [
        '', '万', '億', '兆', '京'
    ]
    return kanjiDigits[d]
}