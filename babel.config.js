module.exports = {
    presets: [
        '@vue/app'
    ],
    // mui
    ignore: ["./src/assets/lib/mui/js/mui.js"],
    plugins: [
        // mint-ui按需引入
        [
            "component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ],
        [
            "import",
            {
                "libraryName": "vant",
                "libraryDirectory": "es",
                "style": true
            },
            "vant"
        ]
    ]
}