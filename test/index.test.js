/**
 * SpellChecker 拼写检查的工具对象说明
 *  setDictionary  Function 设置字典
 *  add            Function 在字典中添加一个单词
 *  remove         Function 在字典中删除一个单词
 *  isMisspelled   Function 检查单词是否拼写错误,
 *                  例: SpellChecker.isMisspelled('This')
 *                      如果有拼写错误, 返回 true
 *                      如果没有拼写错误, 返回 false
 *  checkSpelling  Function 检查单词是否拼写错误,
 *                  例: SpellChecker.checkSpelling('This')
 *                      如果有拼写错误, 返回拼写错误的数组, 格式: [ { start: 0, end: 4 } ]
 *                      如果没有拼写错误, 返回空数组, 格式: []
 *  getAvailableDictionaries       Function    取得可用的字典
 *  getCorrectionsForMisspelling   Function    对于拼写错误得到修正
 */
var SpellChecker = require('spellchecker');

/**
 * 默认配置
 */
var options = {
    en: {
        lang: 'en',
        ignore: []
    }
};

/**
 * 获取运行参数
 */
var args = process.argv.slice(2);

// 返回 true 应该是切换成功的意思
// console.log( SpellChecker.setDictionary('en_US', __dirname + '/dictionaries') );

// 测试拼写
// json 格式
// {
//     "pt": {
//         "common": {
//             "Subscription_information": "Subscription information"
//         }
//     }
// }

// console.log(SpellChecker.isMisspelled('{'));
// console.log(SpellChecker.isMisspelled('"'));
// console.log(SpellChecker.isMisspelled('pt'));
// console.log(SpellChecker.isMisspelled('"pt'));
// console.log(SpellChecker.isMisspelled('"pt"'));
// console.log(SpellChecker.isMisspelled(':'));
// console.log(SpellChecker.isMisspelled('":'));
// console.log(SpellChecker.isMisspelled('"pt":'));
// console.log(SpellChecker.isMisspelled(' '));
// console.log(SpellChecker.isMisspelled('"pt": '));
// console.log(SpellChecker.isMisspelled('"pt": {'));
// console.log(SpellChecker.isMisspelled(' '));
// console.log(SpellChecker.isMisspelled('}'));


// 内部插件
// https://github.com/hunspell/hunspell
// http://hunspell.github.io/
// 字典库
// http://cgit.freedesktop.org/libreoffice/dictionaries/tree/
// https://github.com/LibreOffice/dictionaries.git