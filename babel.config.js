const envPreset = [
    "@babel/preset-env",
    {
        targets: {
            node: "current",
        },
    },
];

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["@babel/preset-typescript", envPreset],
        plugins: [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-optional-chaining",
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
        ],
        env: {
            development: {
                presets: [["@babel/preset-react", { development: true }]],
                plugins: ["react-hot-loader/babel"],
            },
            test: {
                plugins: ["dynamic-import-node"],
            },
            production: {
                presets: ["@babel/preset-react"],
                plugins: [
                    "babel-plugin-dev-expression",
                    "@babel/plugin-transform-react-constant-elements",
                    "@babel/plugin-transform-react-inline-elements",
                    "@babel/plugin-syntax-dynamic-import",
                ],
            },
        },
    };
};
