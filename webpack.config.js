const webpack = require('webpack');
const path = require('path');

const PATHS = {
    app: './src/index.js',
    html: './src/index.html',
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry: {
        javascript: PATHS.app,
        html: PATHS.html
    },
    output: {
        path: PATHS.dist,
        public: '/',
        filename: 'bundle.js'
    },
    devserver: {
        contentBase: PATHS.dist
    },
    eslint: {
    	emitWarning:true
    },
    module: {
    	preLoaders: [ 
    		{
    			test:/\.(js|jsx)$/,
    			loaders: ["eslint-loader"],
    			exclude: /node_modules/
    		}
    	],
        loaders: [{
            test: /\.html$/,
            loader: 'file?name=[name].[ext]' //別給空白檔名會變亂碼
        },
        {
        	test: /\.(js|jsx)/,
        	exclude: /node_modules/,
        	loaders:["react-hot","babel-loader"] //react-hot gets prepended as webpack processes from right to left
        }
        ]
    },
    resolve: {
    	extensions: ['','.js','.jsx']
    }
};
