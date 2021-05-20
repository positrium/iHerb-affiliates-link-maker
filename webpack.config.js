const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        background: path.join(__dirname, "src/background.ts"),
        options: path.join(__dirname, "src/Options.ts"),
        popups: path.join(__dirname, "src/Popup.ts"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /(node_modules|dev)/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, "src/interfaces/ui", "options.html"),
                path.resolve(__dirname, "src/interfaces/ui", "popup.html"),
                {from: "./public", to: "../dist"}
            ]
        })
    ],
    devtool: false
};
