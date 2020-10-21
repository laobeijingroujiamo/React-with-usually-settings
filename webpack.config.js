//webpack.config.js 向外暴露一个配置对象
//webpack是基于node搭建的，所以支持所有的node API

const path = require('path')

//导入 在内存中自动生成index页面的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件
    filename: 'index.html' //生成的内存中首页的名称
})

module.exports ={
    mode:'development', //development production
    //在 webpack 4+中，约定大于配置，默认的打包入口是 src->index.js
    plugins:[
        htmlPlugin
    ],
    module:{//所有第三方 模块的配置规则
        rules:[//第三方匹配规则
            {test: /\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}