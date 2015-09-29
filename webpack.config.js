var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var cssimport = require('postcss-import');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./lib/index'
	],
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/assets/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			},
			'__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
		}),
		new HtmlWebpackPlugin({
			title: 'Airports',
			filename: 'index.html',
			template: 'index.template.html',
			favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
		})
	],
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css!postcss' },
			{ test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'lib') }
		]
	},
	cssnext: {
		browsers: 'last 2 versions'
	},
	postcss: function () {
		return [cssimport, cssnext, autoprefixer];
	}
};
