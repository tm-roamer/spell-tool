"use strict";

var path = require('path');

/**
 * 国际化配置对象
 */
var i18nConfig = {
    // 英语
    en: {
        lang: 'en_US',
        filename: function () {
            return new RegExp(/^locale\.en.*\.json$/, ['i']);
        },
        ignore: [
            "Ptengine",
            "Optimizely",
            "Ptmind",
            "dorumigyoen202",
            "5-29-7sendagaya",
            "sibuya-ku",
            "Heatmap",
            "heatmaps",
            "Ptengine's",
            "Pagegroup",
            "csv",
            "pv",
            "Mon",
            "Fri",
            "Thu",
            "Tue",
            "utm",
            "PVs",
            "textboxes",
            "Comodo",
            "pageviews",
            "Svid",
            "childmost",
            "adblockers",
            "br"
        ]
    },
    // 法语
    fr: {
        lang: 'fr_FR',
        filename: function () {
            return new RegExp(/^locale\.fr.*\.json$/, ['i']);
        },
        ignore: [
        ]
    },
    // 德语
    de: {
        lang: 'de_DE',
        filename: function () {
            return new RegExp(/^locale\.de.*\.json$/, ['i']);
        },
        ignore: [
        ]
    }
};

module.exports = i18nConfig;
