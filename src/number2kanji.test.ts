import { number2kanji } from "./number2kanji"

describe('number2kanji', () => {

    test('整数を漢数字に変換', () => {
        expect(number2kanji(3)).toBe('三')
        expect(number2kanji(27)).toBe('二十七')
        expect(number2kanji(1101)).toBe('千百一')
        expect(number2kanji(5670000000)).toBe('五十六億七千万')
    })

})
