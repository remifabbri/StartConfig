const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === "dev"

let cssLoaders = [
	{ 
		//Permet de de faire commprendre a webpack comment travailler avec le css
		// et de pouvoir utiliser les @import et les url se trouvant dans le css
		loader: 'css-loader', options: { importLoaders: 1, minimize: !dev } 
	},
]

if (!dev) {
	cssLoaders.push({
		loader: 'postcss-loader', //Permet de faire du post-traitement avant la publication du css
		options: {
			plugins: (loader) => [
	      		require('autoprefixer')({ //Ajoute les préfixs pour améliorer la compatibliité aves les navigateurs plus anciens
	      			browsers: ['last 2 versions', 'ie > 8']
	      		}),
			]
		}
	})
}

let config = {

    entry: './src/js/app.js', 

    watch: dev, 

    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },

    devtool: dev ? "cheap-module-eval-source-map" : false,

    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:['babel-loader']
            },
            {
				test:/\.css$/,
                use: cssLoaders	
			},
			{
				test:/\.scss$/,
                use: [...cssLoaders, 'sass-loader'] //charge les fichiers scss et les compile en css			
			},
        ]
    },

    plugins: [
    ]
}

if (!dev){
    config.plugins.push(new UglifyJSPlugin())
}

module.exports = config