module.exports = {
	publicPath:"./",
    devServer: {	//使用web服务器启动
		port: 8888,	//指定端口号
		proxy: {	//设置代理(解决跨域)
			"/ajax": {
				target: "http://m.maoyan.com",
				changeOrigin: true
			}
		}
	},
}