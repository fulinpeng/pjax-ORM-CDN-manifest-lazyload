/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:43:50 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-12 21:38:53
 */

module.exports = function(templateParams) {
    //   var _cssList = ["vendor"];
    var webAssetsHelp = require("./webAssetsHelp.js")(templateParams);

    var _html = `
        {% extends './layout.html' %}
        {% block title %}{{title}}{% endblock %}
        {% block css %}
        ${webAssetsHelp.styles}
        {% endblock %}
        {% block content %}
        {% include "../widget/index.html" %}
        {% endblock %}
        {% block js %}
            <script>
                ~function(){
                    var arrJs=[${webAssetsHelp.jsNameForCache}];
                    arrJs.forEach((name, index)=>{
                        if (localStorage.getItem(name)) {
                            $('<scr'+'ipt>'+localStorage.getItem(name)+'</scr'+'ipt>').attr('id', index).appendTo($('body'));
                        } else {
                            // $.getScript 请求载入并立即执行，是对 $.ajax 的封装
                            $.getScript({
                                url:name,
                                success:(result)=>{
                                    localStorage.setItem(name, result);
                                }
                            });
                        }
                    });
                }();
            </script>
        {% endblock %}`;

    return _html;
};
