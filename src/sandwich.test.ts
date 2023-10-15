import { sandwich } from "./sandwich"

describe('sandwich', () => {

    test('sandwich(x,y,z) x <= y <= z の範囲にくるように y を調整', () => {
        expect(sandwich(0,1,2)).toBe(1)
        expect(sandwich(2,0,4)).toBe(2)
        expect(sandwich(-10,5,-1)).toBe(-1)
        expect(sandwich(5,100,5)).toBe(5)
    })

})
