/*
 * @Author: fulp 
 * @Date: 2018-05-01 08:46:44 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-12 16:15:51
 */

import "../css/star.css";
xtag.register("x-star", {
    content: `<div id="starBox" class="praiseBox starBox">
            <div class="angle angle1"></div>
            <div class="angle angle2"></div>
            <div class="angle angle3"></div>
            <div class="angle angle4"></div>
            <div class="angle angle5"></div>
        </div>
        <span id="showNum" class="showNum"></span>`,
    lifecycle: {
        created: function() {
            this.initnum();
        }
    },
    methods: {
        initnum() {
            const _this = this;
            axios
                .get("/index/initnum")
                .then(function(res) {
                    console.log(res);
                    _this.num = res.data.rows[0].num;
                    document.getElementById("showNum").innerHTML =
                        "赞：" + _this.num + "次";
                })
                .catch(function(err) {
                    console.log(err);
                });
        },
        addition() {
            var _this = this;
            axios
                .get("/index/addition")
                .then(function(res) {
                    console.log(res.data);
                    document.getElementById("showNum").innerHTML =
                        "赞：" + _this.num + "次";
                })
                .catch(function(err) {
                    console.log(err);
                });
        },
        increase() {
            this.num++;
            this.addition();
        }
    },
    events: {
        click: function(e) {
            console.log(e.target);
            this.increase();
        }
    }
});