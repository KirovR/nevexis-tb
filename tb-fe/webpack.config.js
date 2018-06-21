module.exports ={
    entry: './src/index',

    output:{
        path: './',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true,
        contentBase:'./src'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};