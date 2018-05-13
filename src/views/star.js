/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:43:50 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-13 15:16:12
 */
module.exports = function(templateParams) {
    var webAssetsHelp = require("./webAssetsHelp.js")(templateParams);

    var _html =
        "{% extends './layout.html' %}" +
        "{% block title %}{{title}}{% endblock %}" +
        "{% block css %}" +
        webAssetsHelp.styles +
        "{% endblock %}" +
        "{% block content %}" +
        '{% include "../widget/star.html" %}' +
        "{% endblock %}" +
        "{% block js %}" +
        webAssetsHelp.scripts +
        "{% endblock %}";

    return _html;
};