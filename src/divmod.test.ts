import { divmod } from "./divmod"

describe('divmod', () => {

    test('割り切れる数は divが商、modがゼロになる', () => {
        expect(divmod(1, 1)).toEqual({ div: 1, mod: 0 })
        expect(divmod(4, 2)).toEqual({ div: 2, mod: 0 })
    })

    test('割り切れない数は modが余りになる', () => {
        expect(divmod(1, 2)).toEqual({ div: 0, mod: 1 })
        expect(divmod(8, 3)).toEqual({ div: 2, mod: 2 })
    })

})
