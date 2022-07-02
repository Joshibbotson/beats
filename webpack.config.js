const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    "css-loader",
                ]
            }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public")
        },
    
        compress: true,
        port: 3010, // default 8000
      },
}
