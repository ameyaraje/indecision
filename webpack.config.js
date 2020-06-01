const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        // path: '/Users/ameyaraje/Desktop/ReactJS/React-Experiments/indecision-app/public',
        // usage of 'path' makes more sense so the project is portable
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};