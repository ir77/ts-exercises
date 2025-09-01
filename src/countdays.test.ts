import { countdays } from "./countdays"

describe('countdays', () => {

    test('1月1日からの日数を返す (2月は28日とする)', () => {
        expect(countdays(1,1)).toBe(0)
        expect(countdays(1,2)).toBe(1)
        expect(countdays(2,1)).toBe(31)
        expect(countdays(3,1)).toBe(59)
        expect(countdays(12,31)).toBe(364)
    })
    
})
