const webpack = require("webpack");
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"./static/frontend"),
        filename: "main.js",
    },
    
    devServer: {
        inline: false,
        port: 8080,
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                
                    test: /\.css$/,
                    use: [ 'css-loader' ]
            
            }
        ],
        noParse: function(content) {
            return /express/.test(content);
        }
    },
    resolve: {//I had errors and warnings with modules, below solved it
        fallback : {
            path: require.resolve('path-browserify/'),
            "stream": require.resolve("stream-browserify"),
            "util": false,
            "polyfill": false,
            "buffer": false,
            'zlib': false,
            'crypto': false,
            "http": false
        },
        
        modules: [path.resolve(__dirname), "node_modules/"],
        extensions: [".js", ".json"],
        symlinks: false,
        descriptionFiles: ["package.json"],
        },  
       
        
        /* node:{
            crypto: true,
            stream: true,
            fs:"empty",
            net:'empty'
    
        }, */
        target:"node",

        
    
   
};