export function kanji2number(kanji: string): number {
    let total = 0
    let sectionTotal = 0
    let numberBuffer = 0

    // 文字を前から順に処理
    for (let i = 0; i < kanji.length; i++) {
        const char = kanji[i]

        if (char in {'万':1, '億':1, '兆':1}) {
            sectionTotal += numberBuffer
            numberBuffer = 0
            total += sectionTotal * kanjiLargePlaceToNumber(char)
            sectionTotal = 0
        } else if (char in {'十':1, '百':1, '千':1}) {
            if (numberBuffer === 0) {
                numberBuffer = 1
            }
            sectionTotal += numberBuffer * kanjiPlaceToNumber(char)
            numberBuffer = 0
        } else {
            numberBuffer = kanjiDigitToNumber(char)
        }
    }

    sectionTotal += numberBuffer
    total += sectionTotal

    return total
}

// 一、二、三 など一桁の漢字を 1, 2, 3 など一桁の数字に変換する関数
function kanjiDigitToNumber(kanji: string): number {
    const kanjiDigits: { [key: string]: number } = {
        '一': 1,
        '二': 2,
        '三': 3,
        '四': 4,
        '五': 5,
        '六': 6,
        '七': 7,
        '八': 8,
        '九': 9,
    }
    return kanjiDigits[kanji] || 0
}

// 十、百、千 などの位を表す漢字を 10, 100, 1000 などの数字に変換する関数
function kanjiPlaceToNumber(kanji: string): number {
    const kanjiPlaces: { [key: string]: number } = {
        '十': 10,
        '百': 100,
        '千': 1000,
    }
    return kanjiPlaces[kanji] || 1
}

// 万、億、兆 などの大きな位を表す漢字を 10000, 100000000, 1000000000000 などの数字に変換する関数
function kanjiLargePlaceToNumber(kanji: string): number {
    const kanjiLargePlaces: { [key: string]: number } = {
        '万': 10000,
        '億': 100000000,
        '兆': 1000000000000,
    }
    return kanjiLargePlaces[kanji] || 1
}
