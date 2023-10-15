import { split2 } from "./split2"

describe('split2', () => {

    test('文字列をカンマまたは空白で区切る', () => {
        expect(split2('abc')).toEqual(['abc'])
        expect(split2('a bbb cc')).toEqual(['a','bbb','cc'])
    })

})
