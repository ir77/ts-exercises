import { badparen } from "./badparen"

describe('badparen', () => {

    test('悪いカッコの位置を返す (正常な場合)', () => {
        expect(badparen('123')).toBe(-1)
        expect(badparen('(123 4567)')).toBe(-1)
    })

    test('悪いカッコの位置を返す (閉じ括弧が足りない場合)', () => {
        expect(badparen('(123')).toBe(0)
        expect(badparen('(123 (4567 (890')).toBe(11)
    })

    test('悪いカッコの位置を返す (閉じ括弧が余計な場合)', () => {
        expect(badparen('4567)')).toBe(3)
        expect(badparen(')))')).toBe(0)
    })

})
