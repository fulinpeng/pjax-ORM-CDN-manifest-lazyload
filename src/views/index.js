/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:43:50 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-13 16:13:05
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
                    var finishGet=false;
                    for(var i=0; i<arrJs.length; i++){
                        var path=arrJs[i];
                        if (localStorage.getItem(path)) {
                            $('<scr'+'ipt>'+localStorage.getItem(path)+'</scr'+'ipt>').attr('id', i).appendTo($('body'));
                        } else {
                            // 只要有一个没有存在，就需要清除缓存，并重新加载js
                            localStorage.clear();
                            finishGet=true;
                            // 先异步请求所有资源，添加到 localStorage 中
                            arrJs.forEach(function(name, index){
                                axios.get(name)
                                .then(function(result){
                                    localStorage.setItem(name, result.data);
                                });
                            });
                            break;
                        }
                    }
                    // LazyLoad 会等待上面最耗时的那个 axios 请求完毕后，再执行js内容
                    if (finishGet) {
                        LazyLoad.js(arrJs, function() {
                            console.log('arrJs finished');
                        });
                    }
                }();
            </script>
        {% endblock %}`;

    return _html;
};