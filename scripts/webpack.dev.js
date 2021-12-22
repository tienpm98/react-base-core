const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')
const { merge } = require('webpack-merge')
const Dotenv = require('dotenv-webpack')

module.exports = merge(config, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify('development'),
		}),

		new Dotenv({
			path: `./.env.development`,
		}),
	],
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
		watchOptions: {
			ignored: /node_modules/,
		},
	},
	devtool: 'inline-source-map',
})
