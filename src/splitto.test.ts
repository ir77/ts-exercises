import { splitto } from "./splitto"

describe('splitto', () => {

    test('文字列を「と」で区切る', () => {
        expect(splitto('部屋とワイシャツと私')).toEqual(['部屋', 'ワイシャツ', '私'])
        expect(splitto('よれよれ')).toEqual(['よれよれ'])
    })

    test('「〜」で囲まれている「と」は区切り文字として扱わない', () => {
        expect(splitto('「にわとり」と「ことり」')).toEqual(['にわとり', 'ことり'])
        expect(splitto('罪「と」罰')).toEqual(['罪と罰'])
    })

})
