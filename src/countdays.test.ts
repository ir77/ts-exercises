import { countdays } from "./countdays"

describe('countdays', () => {
    test('1月1日からの日数を返す (2月は28日とする)', () => {
        expect(countdays(1,1)).toBe(0)
        expect(countdays(1,2)).toBe(1)
        expect(countdays(2,1)).toBe(31)
        expect(countdays(3,1)).toBe(59)
        expect(countdays(10,31)).toBe(303)
        expect(countdays(11,1)).toBe(304)
        expect(countdays(11,30)).toBe(333)
        // expect(countdays(12,30)).toBe(364)
        expect(countdays(12,31)).toBe(364)
    })

})
