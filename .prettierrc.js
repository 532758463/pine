module.exports = {
    overrides: [
        {
            files: [".stylelintrc", ".huskyrc", ".lintstagedrc"],
            options: {
                parser: "json",
            },
        },
    ],
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
};
