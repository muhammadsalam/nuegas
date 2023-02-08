module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "file-loader",
						options: { name: "static/css/[name].[ext]" },
					},
					"postcss-loader",
				],
			},
		],
	},
	plugins: [
		require("postcss-import"),
		require("postcss-nested"),
		require("autoprefixer"),
		require("css-loader"),
		require("postcss-loader"),
	],
};
