import { alternate } from "./alternate"

describe('alternate', () => {

    test('英字または数字が交互に現れていれば真 (1文字だけの場合)', () => {
        expect(alternate('x')).toBe(true)
        expect(alternate('0')).toBe(true)
    })

    test('英字または数字が交互に現れていれば真 (複数文字の場合)', () => {
        expect(alternate('zzz')).toBe(false)
        expect(alternate('a11y')).toBe(false)
        expect(alternate('p2q')).toBe(true)
        expect(alternate('b2f9e')).toBe(true)
        expect(alternate('4m0n7v6')).toBe(true)
    })
    
})