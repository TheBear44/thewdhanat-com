const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          enforce: `pre`,
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              options: {
                eslintPath: path.resolve(__dirname, "node_modules/eslint"),
                useEslintrc: false,
                baseConfig: {
                  extends: path.resolve(
                    __dirname,
                    "node_modules/eslint-config-react-app/index.js"
                  )
                }
              },
              loader: "eslint-loader"
            }
          ]
        }
      ]
    }
  });
};
