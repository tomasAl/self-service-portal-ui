const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "rc-ses",
    projectName: "self-service-portal-ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: [
      /^@rc-ses\/.+/,
      "react",
      "react-dom"
    ],
    watchOptions: {
      // for some systems, watching many files can result in a lot of CPU or memory usage
      // https://webpack.js.org/configuration/watch/#watchoptionsignored
      // don't use this pattern, if you have a monorepo with linked packages
      ignored: /node_modules/,
    }
  });
};
