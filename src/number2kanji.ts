export function number2kanji(x: number): string {
    // 5678912345 という数字を [[5,6],[7,8,9,1],[2,3,4,5]] のように4桁ずつ区切る
    if (x === 0) return '零'

    const parts: number[][] = []
    let part: number[] = []
    while (x > 0) {
        part.push(x % 10)
        x = Math.floor(x / 10)
        if (part.length === 4) {
            parts.push(part)
            part = []
        }
    }
    if (part.length > 0) {
        parts.push(part)
    }
    
    // 各部分を漢数字に変換して連結する
    return parts.map((p, i) => {
        return p.map((d, j) => {
            if (d === 0) return ''
            if (j === 0) return singleDigitToKanji(d)
            if (d === 1) return digitToKanji(j)
            return singleDigitToKanji(d) + digitToKanji(j)
        }).reverse().join('') + largeDigitToKanji(i)
    }).reverse().join('')
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