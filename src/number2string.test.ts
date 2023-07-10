import { number2string  } from "./number2string"

describe('number2string', () => {

    test('ひと桁の整数を文字列に変換する', () => {
        expect(number2string(0)).toBe("0")
        expect(number2string(5)).toBe("5")
    })

    test('任意の整数を文字列に変換する', () => {
        expect(number2string(42)).toBe("42")
        expect(number2string(1000)).toBe("1000")
    })

})
