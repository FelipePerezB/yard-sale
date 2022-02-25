const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin=require("mini-css-extract-plugin")
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:"/",
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    mode:"development",
    resolve:{
        extensions:[
            ".js",
            ".jsx"
        ],
        alias:{
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@icons": path.resolve(__dirname, "./src/assets/icons"),
            "@images": path.resolve(__dirname, "./src/assets/images")
        }
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:"html-loader"
                }
            },
            {
                test:/\.css|scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: "asset/resource"
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"./index.html"
        }),
        new miniCssExtractPlugin({
            filename:"[name].css"
        })
        
    ],
    devServer:{
        historyApiFallback:true,
        static: {
            directory: path.join(__dirname, 'public'),
            },
        port:3002,
        compress:true,
        open:true,
        static:{

        }
    }

}