import { kanji2number } from "./kanji2number"

describe('kanji2number', () => {

    test('漢数字を整数に変換', () => {
        expect(kanji2number('三')).toBe(3)
        expect(kanji2number('二十七')).toBe(27)
        expect(kanji2number('千百一')).toBe(1101)
        expect(kanji2number('千百十一')).toBe(1111)
        expect(kanji2number('五万')).toBe(50000)
        expect(kanji2number('五十六億七千万')).toBe(5670000000)
    })

})
