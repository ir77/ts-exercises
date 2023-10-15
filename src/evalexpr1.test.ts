import { evalexpr1 } from "./evalexpr1"

describe('evalexpr1', () => {

    test('式の評価 (足し算のみ)', () => {
        expect(evalexpr1('1+1')).toBe(2)
        expect(evalexpr1('12+345')).toBe(357)
    })

    test('式の評価 (足し算と掛け算)', () => {
        expect(evalexpr1('2*3')).toBe(6)
        expect(evalexpr1('1+2*3')).toBe(9)
        expect(evalexpr1('3-2*4-5*2')).toBe(-2)
    })

})
