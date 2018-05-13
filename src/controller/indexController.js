/**
 * Created by flp on 2018/4/12.
 */
import indexModel from "../models/indexModel";
const indexController = {
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render("index.html", {
                title: "首页-index"
            });
        };
    },
    initnum() {
        return async(ctx, next) => {
            const indexMode_ = new indexModel();
            ctx.body = await indexMode_.initnum();
        };
    },
    addition() {
        return async(ctx, next) => {
            const indexMode_ = new indexModel();
            ctx.body = await indexMode_.addition();
        };
    },
    toThumb() {
        return async(ctx, next) => {
            if (ctx.request.header['x-pjax']) {
                ctx.body = "<h1>pjax返回的内容</h1><x-thumb></x-thumb>";
            } else {
                ctx.body = await ctx.render("index.html", {
                    title: "page-thumb",
                });
            }
        };
    },
    toStar() {
        return async(ctx, next) => {
            if (ctx.request.header['x-pjax']) {
                ctx.body = "<h1>pjax返回的内容</h1><x-star></x-star>";
            } else {
                ctx.body = await ctx.render("star.html", {
                    title: "page-star",
                });
            }
        };
    },
    getAdv() {
        return async(ctx, next) => {
            ctx.body = `
                <div class="adv" style="background:green;height:200px;color:yellow;">
                    <h1>广告位置...</h1>
                </div>`;
        };
    }
};

export default indexController;