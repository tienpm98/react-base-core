const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(config, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify('production'),
		}),
	],

	optimization: {
		minimizer: [new TerserPlugin()],
	},

	devtool: 'source-map',
})
