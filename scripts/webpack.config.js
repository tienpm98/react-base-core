const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.tsx',
	},

	resolve: {
		alias: {
			config: path.resolve(__dirname, '../src/environments/'),
			layouts: path.resolve(__dirname, '../src/app/layouts'),
			pages: path.resolve(__dirname, '../src/app/pages/'),
			containers: path.resolve(__dirname, '../src/app/containers/'),
			components: path.resolve(__dirname, '../src/app/components/'),
			models: path.resolve(__dirname, '../src/app/models/'),
			routes: path.resolve(__dirname, '../src/app/routes/'),
			constants: path.resolve(__dirname, '../src/app/constants/'),
			hooks: path.resolve(__dirname, '../src/app/hooks/'),
			utils: path.resolve(__dirname, '../src/app/utils/'),
			helper: path.resolve(__dirname, '../src/app/helper/'),
			assets: path.resolve(__dirname, '../src/app/assets/'),
			store: path.resolve(__dirname, '../src/app/store'),
			guards: path.resolve(__dirname, '../src/app/guards/'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.svg$/,
				include: path.resolve(__dirname, '../'),
				use: [
					{
						loader: 'raw-loader',
						options: {
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.(png|jpg?e|gif)$/i,
				use: {
					loader: 'file-loader',
					options: {
						esModule: false,
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
	],

	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
}
