const webpack = require("webpack");
const WebpackModules = require("webpack-modules");
const path = require("path");
const config = require("sapper/config/webpack.js");
const pkg = require("./package.json");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const alias = { svelte: path.resolve("node_modules", "svelte") };
const extensions = [".mjs", ".js", ".json", ".svelte", ".html"];
const mainFields = ["svelte", "module", "browser", "main"];

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: "svelte-loader",
            options: {
              dev,
              hydratable: true,
              hotReload: true, // pending https://github.com/sveltejs/svelte/issues/2377
              preprocess: require("svelte-windicss-preprocess").preprocess({
                // silent: false, // ADD THIS
                // debug: true,
                config: "tailwind.config.js", // tailwind config file path
                compile: false, // false: interpretation mode; true: compilation mode
                prefix: "windi-", // set compilation mode style prefix
                globalPreflight: true, // set preflight style is global or scoped
                globalUtility: true, // set utility style is global or scope
              }),
            },
          },
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && "inline-source-map",
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: "node",
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat("encoding"),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: [
            {
              loader: "svelte-loader",
              options: {
                css: false,
                generate: "ssr",
                hydratable: true,
                dev,
                preprocess: require("svelte-windicss-preprocess").preprocess({
                  // silent: false, // ADD THIS
                  // debug: true,
                  config: "tailwind.config.js", // tailwind config file path
                  compile: false, // false: interpretation mode; true: compilation mode
                  prefix: "windi-", // set compilation mode style prefix
                  globalPreflight: true, // set preflight style is global or scoped
                  globalUtility: true, // set utility style is global or scoped
                }),
              },
            },
          ],
        },
      ],
    },
    mode,
    plugins: [new WebpackModules()],
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode,
  },
};
