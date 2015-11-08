var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: './lib/index.js'
	},
	output: {
		filename: '[name].min.js',
		path: path.join(__dirname, 'dist'),
		publicPath: ''
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			},
			'__DEVTOOLS__': false
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('app.css', { allChunks: true }),
		new HtmlWebpackPlugin({
			title: 'Airports',
			filename: 'index.html',
			template: 'index.template.html',
			favicon: path.join(__dirname, 'assets/images/favicon.ico')
		})
	],
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!cssnext!postcss') },
			{ test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'lib') },
			{ test: /\.json$/, loader: 'json' }
		]
	},
	cssnext: {
		browsers: 'last 2 versions'
	},
	postcss: function () {
		return [autoprefixer];
	}
};
