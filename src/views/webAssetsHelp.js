/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:44:03 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-13 11:46:37
 */
import CONFIG from "../config/config.js"
module.exports = function(templateParams) {
    var _root = CONFIG.get("domain"),
        _files = templateParams.htmlWebpackPlugin.files,
        _jsChunk = _files.js,
        _cssChunk = _files.css,
        _scripts = "",
        _styles = "",
        _cssNameForCache = [],
        _jsNameForCache = [];

    _cssChunk.map(function(filename) {
        var _filename = filename.split("public")[1];
        var _relName = `"${_root}public${_filename}"`;
        _cssNameForCache.push(_relName);
        _styles += `<link rel="stylesheet" type="text/css" href=${_relName}/>`;

    });
    _jsChunk.map(function(filename) {
        var _filename = filename.split("public")[1];
        var _relName = `"${_root}public${_filename}"`;
        _jsNameForCache.push(_relName);
        _scripts += `<script type="text/javascript" src=${_relName}></script>`;
    });
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", _scripts);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', _cssNameForCache, _jsNameForCache);
    return {
        scripts: _scripts,
        styles: _styles,
        cssNameForCache: _cssNameForCache,
        jsNameForCache: _jsNameForCache,
    };
};