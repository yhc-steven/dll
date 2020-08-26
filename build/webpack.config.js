const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const manifest = require('../dist/react-manifest.json');
module.exports={
    entry:{
        app : path.join(__dirname,'./../','src/index.tsx')
    },
    output:{
        path:path.join(__dirname,'./../','dist'),
        filename:'[name].js'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.ts(x?)$/,
                use:[
                    {
                        loader:'awesome-typescript-loader',
                        options:{

                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'build/tpl/index.html',
            filename:'../dist/index.html',
            inject:'body',
            vendor:'./'+manifest.name +'.js'
        }),
        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('../dist/react-manifest.json')
        }),
    ]
}