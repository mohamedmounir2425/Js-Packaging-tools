const pathModule = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: './src/first.js',
    output: {
        filename: 'bundle.js',
        path: pathModule.join(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]'
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({filename:'style.min.css'})
    ],

    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.imageminMinify,
                  options: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                      ["gifsicle", { interlaced: true }],
                      ["jpegtran", { progressive: true }],
                      ["optipng", { optimizationLevel: 5 }],
                      // Svgo configuration here https://github.com/svg/svgo#configuration
                      [
                        "svgo",
                        {
                          plugins: [
                            {
                              name: "preset-default",
                              params: {
                                overrides: {
                                  removeViewBox: false,
                                  addAttributesToSVGElement: {
                                    params: {
                                      attributes: [
                                        { xmlns: "http://www.w3.org/2000/svg" },
                                      ],
                                    },
                                  },
                                },
                              },
                            },
                          ],
                        },
                      ],
                    ],
                  },
                },
              }),
        ],
      },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            
        
        {
          test: /\.html/,
          type: 'asset/resource',
          generator: {
            filename: 'static/[name][ext][query]'
          }
        }
        ],
      },
}