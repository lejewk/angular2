/**
 * Created by lejewk on 2017-04-19.
 */
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-eval-source-map',
	
	output: {
		path: helpers.root('dist'),
		publicPath: 'http://localhost:3500/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},
	
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	
	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
});