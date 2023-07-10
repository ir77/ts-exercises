import { string2number  } from "./string2number"

describe('string2number', () => {

    test('ひと桁の文字列を整数に変換する', () => {
        expect(string2number("0")).toBe(0)
        expect(string2number("5")).toBe(5)
    })

    test('任意の桁数の文字列を整数に変換する', () => {
        expect(string2number("42")).toBe(42)
        expect(string2number("1000")).toBe(1000)
    })

})
