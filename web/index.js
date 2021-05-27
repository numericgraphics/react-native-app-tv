import { AppRegistry } from 'react-native'
import './spatialNavigationPolyfill.js'
import App from '../src/App'

AppRegistry.registerComponent('RTSAppTv', () => App)

AppRegistry.runApplication('RTSAppTv', {
    rootTag: document.getElementById('main')
})
