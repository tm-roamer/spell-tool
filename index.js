"use strict";

var SpellChecker = require('spellchecker');
var fs = require('fs');
var path = require('path');
var config = require('./config');

/**
 * 默认配置
 */
var options = {
    // 全局 默认语言英语, 可以被替换
    lang: 'en_US',
    // 全局 默认的国际化文件路径
    // path: '/Users/tianming/Desktop/ptengine-web/client/i18n'
    path: path.resolve(__dirname, './i18n')
};

/**
 * 属性copy
 * @param options 默认配置
 * @param language 语言的定制配置
 */
function extend(options, language) {
    language || (language = en);
    for (var key in language) {
        options[key] = language[key];
    }
    return options;
}

/**
 * 获取运行参数
 */
var args = process.argv.slice(2);

extend(options, config[args[0]]);

// 切换字典
SpellChecker.setDictionary(options.lang, __dirname + '/dictionaries');

console.log('');
console.log('☺☺☺☺☺☺☺☺☺☺国际化文件拼写检查☺☺☺☺☺☺☺☺☺☺☺');
console.log('');

/**
 * 遍历目录
 */
console.log('读取目录:' + options.path);
console.log('');
fs.readdir(options.path, function (err, files) {
    if (err)
        console.error("读取目录发生错误: error = " + JSON.stringify(err, undefined, 4));
    else
        regexpFileName(options.path, files);
});

/**
 * 正则匹配文件名, 过滤非英文国际化文件
 * @param dir 目录
 * @param files 目录里面的文件数组
 */
function regexpFileName(dir, files) {
    var count = 0, num = 0;
    Array.isArray(files) && files.forEach(function (filename, index) {
        if (options.filename().exec(filename)) {
            if (count === 0) {
                console.log('开始进行文件拼写检查...');
                console.log('');
            }
            console.log('检查第' + (++count) + '个文件, 文件名:' + filename);
            console.log('');
            console.log('-------------------文件' + filename + ", 有 " +
                ((num = spellFile(dir, filename), num) ? num + " 处拼写错误" : "0 处拼写错误----------------"));
            console.log('');
        }
    });
}

/**
 * 文件的拼写检查
 * @param dir 目录
 * @param filename 文件名
 * @return count 拼写错误的单词个数
 */
function spellFile(dir, filename) {
    var count = 0;
    try {
        var file = fs.readFileSync(path.resolve(dir, filename), 'utf-8');
        var i18n = JSON.parse(file);
        // 递归读取对象
        getObject(i18n, function(key, value) {
            if (SpellChecker.isMisspelled(value)) {
                var isMisspell = false,
                    arr = SpellChecker.checkSpelling(value);
                Array.isArray(arr) && arr.forEach(function(info) {
                    // 忽略单词
                    var word = value.substring(info.start, info.end);
                    if (ignoreWord(word)) {
                        // 存在拼写错误, 先打印key, value
                        if (!isMisspell) {
                            console.error('拼写错误的字段 key   = ' + key);
                            console.error('拼写错误的字段 value = ' + value);
                            isMisspell = true;
                        }
                        console.error('疑似拼写错误 ~~~~ ' + word + ' ~~~~ ');
                        ++count;
                    }
                });
                isMisspell && console.log('');
            }
        });
    } catch (err) {
        throw new Error("读取文件发生错误: error=" + JSON.stringify(err, undefined, 4))
    }
    return count;
}

/**
 * 递归读取对象, 因有对象嵌套情况
 * @param obj 对象
 * @param ck 回调函数
 */
function getObject(obj, ck) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            typeof value !== "string" && getObject(value, ck);
            value && ck && typeof ck === "function" && ck(key, value);
        }
    }
}

/**
 * 忽略单词
 * @param word 单词
 * @return ignore true=忽略, false=不忽略
 */
function ignoreWord(word) {
    var ignore = true,
        arr = options.ignore;
    Array.isArray(arr) && arr.forEach(function(value) {
        if (new RegExp('^' + word + '$', ['i']).exec(value)) {
            ignore = false;
        }
    });
    return ignore;
}
