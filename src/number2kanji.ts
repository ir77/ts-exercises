export function number2kanji(x: number): string {
    // 5678912345 という数字を [56,7891,2345] のように4桁ずつ区切る

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