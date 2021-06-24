/**
 * react-app-rewirred overrides for react-scripts
 */

module.exports = {
    /**
   * Search for .web.js files
   */
    webpack: (config, env) => {
        config.resolve = {
            alias: {
                'react-native$': 'react-native-web',
                'react-native-linear-gradient': 'react-native-web-linear-gradient'
            },
            extensions: ['.web.js', '.js']
        }
        // config.addExternalBabelPlugins('@babel/plugin-proposal-class-properties')
        // eslint-disable-next-line no-undef
        // addExternalBabelPlugins('@babel/plugin-syntax-jsx')
        return config
    },

    /**
   * Changes paths to web/
   */
    paths: (paths, env) => {
        paths.appBuild = paths.appPath + '/web/build'
        paths.appPublic = paths.appPath + '/web/public'
        paths.appHtml = paths.appPath + '/web/public/index.html'
        paths.appIndexJs = paths.appPath + '/web/index.js'
        return paths
    }
}
