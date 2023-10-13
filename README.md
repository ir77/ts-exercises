# ts-exercies

これは typescript + jest を使って TDD (テスト駆動開発) を行うための練習問題です。
できれば何も見ないでコードを完成させる (すべてのテストを通す) のが理想です。

## 準備

あらかじめ Node.js をインストールしておく。

    $ git clone https://github.com/euske/ts-exercises
    $ cd ts-exercies
    $ npm install

## テスト実行

    $ npm test (あるいは npm t)

## 問題 (初級)

 1. `divmod.ts`: 割り算の商と余りをオブジェクトで返す。
 2. `findstring.ts`: ある文字列中に出現する別の文字列の回数を返す。 
 3. `number2string.ts`: 整数を文字列に変換する (負の数は考えない)。toString()メソッドを使わずに書いてみてください。
 4. `string2number.ts`: 文字列を文字列に変換する (負の数は考えない)。parseInt関数を使わずに書いてみてください。
 5. `rightmost.ts`: QWERTY配列のキーボードで、一番右にある文字を返す。
 6. `alternate.ts`: 英字または数字が交互に現れていれば真を返す。
 7. `sandwich.ts`: x <= y <= z の範囲にくるように yの値 を調整する。
 8. `split2.ts`: 文字列をカンマまたは空白で区切る。
 9. `badparen.ts`: 悪いカッコの位置を返す。

## 問題 (中級)

 10. `countdays.ts`: 1月1日から数えた日数を返す (2月は28日とする)。
 11. `number2kanji.ts`: 整数を漢数字に変換する。
 12. `kanji2number.ts`: 漢数字の列を整数に変換する。
 13. `splitto.ts`: 文字列を「と」で区切る。
 14. `evalexpr1.ts`: 数式を評価する (簡易版)。
