# CDN预加载

* 使用 DNS预加载(DNS Prefetching)
  * 地址 https://github.com/crwilliams/diary-user-interface/wiki/DNS-Prefetching
* 配置方法:
  * 添加带http-equiv属性的 meta 标签，开启隐式预获取 DNS Prefetching
  * 添加link标签设置，DNS 主机名

# pjax
 * 引入 jquery.pjax
 * 地址 https://github.com/defunkt/jquery-pjax

# js 离线存储 loaclStorage
* 将js文件保存在 loaclStorage 中
* 离线缓存有个弊端，`当有新版本时浏览器文件不更新`

# 封装 ORM
* 引入 localforage 
* 异步存储 IndexedDB (默认) 或 WebSQL
* 不支持 IndexedDB 的浏览器，使用 localStorage

# webpack插件 + 服务器 配置Mainefest
* 当断网时、服务器断开时，也能访问页面
* 地址 https://www.npmjs.com/package/webpack-manifest
* 配置主要3个步骤
  * 1、在服务器上添加MIME TYPE
  * 2、创建 .manifest 文件，配置缓存的文件，并标注版本号
  * 3、给 <html> 标签加 manifest 属性，并引用manifest文件
    * `<html manifest="path/to/name-of.manifest">`
* 后两个配置，可以添加webpack插件自动完成，打包时，会自动生成一个 cache.manifest 文件
  * 注意 Manifest 和 HtmlWebpackPlugin 的位置，`前者要写在后者的后面`

# 动态配置静态资源路径
* output 设置 publicPath 属性
* 有时在处理 html 和 css 中的路路径有冲突，比如同时使用了一张图片
  * 此时需要用插件来配置 html-withimg-loader 单独`处理HTML中图片路径`问题
