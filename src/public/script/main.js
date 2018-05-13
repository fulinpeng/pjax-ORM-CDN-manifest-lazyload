/*
 * @Author: fulp 
 * @Date: 2018-05-01 20:18:35 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-12 21:35:08
 */

import "../css/index.css";
import CONFIG from "../../config/config.js";
// 主页的其它逻辑...
$(document).ready(function() {
    $(document).pjax("a", "#container");
    // 简单的 ROM 封装示例
    localforage.getItem('advertisement', function(err, data) {
        if (err) {
            return err;
        }
        let container = $('#advertisement');
        if (data) {
            // 将数据添加到页面
            container.append(data);
        } else {
            // ajax 请求
            $.ajax({
                url: CONFIG.get("domain") + 'index/adv',
                success: function(data) {
                    if (data) {
                        container.append(data);
                        localforage.setItem('advertisement', data);
                    }
                }
            });
        }
    });
});