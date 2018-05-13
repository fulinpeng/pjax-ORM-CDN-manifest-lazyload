webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(10);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

xtag.register("x-thumb", {
    content: "<div id='thumbBox' class='praiseBox'></div>" + "<div class='red1'></div>" + "<div class='red2'>" + "<div class='red2-1'></div>" + "<div class='red2-2'></div>" + "<div class='red2-3'></div>" + "</div>" + "<span id='showNum' class='showNum'></span>",
    lifecycle: {
        created: function created() {
            this.initnum();
        }
    },
    methods: {
        initnum: function initnum() {
            var _this = this;
            axios.get("/index/initnum").then(function (res) {
                console.log(res);
                _this.num = res.data.rows[0].num;
                document.getElementById("showNum").innerHTML = "赞：" + _this.num + "次";
            }).catch(function (err) {
                console.log(err);
            });
        },
        addition: function addition() {
            var _this = this;
            axios.get("/index/addition").then(function (res) {
                console.log(res.data);
                document.getElementById("showNum").innerHTML = "赞：" + _this.num + "次";
            }).catch(function (err) {
                console.log(err);
            });
        },
        increase: function increase() {
            this.num++;
            this.addition();
        }
    },
    events: {
        click: function click(e) {
            console.log(e.target);
            this.increase();
        }
    }
}); /*
     * @Author: fulp 
     * @Date: 2018-05-01 08:46:44 
     * @Last Modified by: fulp
     * @Last Modified time: 2018-05-12 12:31:53
     */

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

xtag.register("x-star", {
    content: "<div id=\"starBox\" class=\"praiseBox starBox\">\n            <div class=\"angle angle1\"></div>\n            <div class=\"angle angle2\"></div>\n            <div class=\"angle angle3\"></div>\n            <div class=\"angle angle4\"></div>\n            <div class=\"angle angle5\"></div>\n        </div>\n        <span id=\"showNum\" class=\"showNum\"></span>",
    lifecycle: {
        created: function created() {
            this.initnum();
        }
    },
    methods: {
        initnum: function initnum() {
            var _this = this;
            axios.get("/index/initnum").then(function (res) {
                console.log(res);
                _this.num = res.data.rows[0].num;
                document.getElementById("showNum").innerHTML = "赞：" + _this.num + "次";
            }).catch(function (err) {
                console.log(err);
            });
        },
        addition: function addition() {
            var _this = this;
            axios.get("/index/addition").then(function (res) {
                console.log(res.data);
                document.getElementById("showNum").innerHTML = "赞：" + _this.num + "次";
            }).catch(function (err) {
                console.log(err);
            });
        },
        increase: function increase() {
            this.num++;
            this.addition();
        }
    },
    events: {
        click: function click(e) {
            console.log(e.target);
            this.increase();
        }
    }
}); /*
     * @Author: fulp 
     * @Date: 2018-05-01 08:46:44 
     * @Last Modified by: fulp
     * @Last Modified time: 2018-05-12 16:15:51
     */

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[7]);