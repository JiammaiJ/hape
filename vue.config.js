module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true,
                pathRewrite: {
                    // '^/api': ''
                }
            },
            '/mock': {
                target: 'https://www.easy-mock.com/mock/5d52872265efbd1b46d22045',
                changeOrigin: true,
                pathRewrite: {
                    '^/mock': ''
                }
            }
        }
    }
}