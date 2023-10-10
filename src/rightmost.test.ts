import { rightmost  } from "./rightmost"

describe('rightmost', () => {

    test('一番右にある文字を返す', () => {
        expect(rightmost('WORIY')).toBe('O')
        expect(rightmost('LADS')).toBe('L')
        expect(rightmost('ZBVM')).toBe('M')
    })

})