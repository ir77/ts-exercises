import { findstring } from "./findstring"

describe('findstring', () => {

    test('文字列が見つからない場合', () => {
        expect(findstring("abc", "zzz")).toBe(0)
        expect(findstring("abc", "abcd")).toBe(0)
    })

    test('文字列が1つだけ見つかる場合', () => {
        expect(findstring("abcd", "abc")).toBe(1)
        expect(findstring("babc", "abc")).toBe(1)
    })

    test('文字列が複数見つかる場合', () => {
        expect(findstring("abcabc", "abc")).toBe(2)
        expect(findstring("axxxa", "x")).toBe(3)
        expect(findstring("ayyya", "yy")).toBe(2)
    })

})
