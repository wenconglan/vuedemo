
// webpack 打包操作   
// vue-cli 脚手架的配置文件 
// 以后修改这个配置文件  一定要重启服务 才能有用 
module.exports = {
    lintOnSave:false ,   // 处理ESLint 的 error 提示 
    devServer:{
        host:"localhost",  // 0.0.0.0
        port:8000,
        open:true,  // 自动打开浏览器
        inline:true,
        proxy:{   // 反向代理  
            "/api":{
                target:"http://localhost:2000",
            }
        }
    },
    // publicPath:"",  // 项目上线打包 
    css:{
        loaderOptions:{
            css:{},
            postcss:{   // css 代码转化
                plugins:[  // 插件
                    require("postcss-px2rem-exclude")({
                        // 3. 淘宝适配  1rem = 10vw 
                        remUnit:37.5,   // 自动除以 100 
                        // remUnit:100     // 网易适配 
                    })
                ]
            }
        }
    }
}