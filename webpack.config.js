module.exports ={
	entry: "./app/App.js",
	output: {
		filename: "./public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				include: /app/,
				exclude: /node_modules/,
				loader: 'jsx-loader'
			}
		]
	}
}