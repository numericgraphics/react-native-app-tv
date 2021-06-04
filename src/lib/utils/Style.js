import { PixelRatio, StyleSheet, Dimensions } from 'react-native'
import Colors from './Colors'

// Get pixel ratio
const pixelRatio = PixelRatio.get()

// Screen dimensions
const { width, height } = Dimensions.get('window')
const baseHeight = 1080
const mediumWeightFontValue = '300'
const lightWeightFontValue = '100'

console.log('DEBUG - window width', width)
console.log('DEBUG - window height', height)
console.log('DEBUG - RN-PixelRatio', pixelRatio)

const Style = {
    buttonFocusedColor: Colors.TRANSPARENT,
    detailButtonColor: '#bdbdbd',
    px: (size) => {
        return Math.round((size * (height / 1080)) / pixelRatio)
    },
    ratio: (size) => {
        return Math.round((size * (height / baseHeight)))
    }
}

Style.typography = {
    h1: {
        fontFamily: 'SRGSSRTypeDisplayVFApp-Medium',
        fontSize: Style.ratio(50),
        fontWeight: 'bold'
    },
    h2: {
        fontFamily: 'SRGSSRTypeDisplayVFApp-Medium',
        fontSize: Style.ratio(42),
        fontWeight: mediumWeightFontValue
    },
    h3: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(32),
        fontWeight: 'normal'
    },
    h4: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(30),
        fontWeight: mediumWeightFontValue
    },
    subtitle1: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(32),
        fontWeight: lightWeightFontValue
    },
    subtitle2: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(26),
        fontWeight: 'normal'
    },
    body: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(30),
        fontWeight: 'normal'
    },
    button: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(32),
        fontWeight: mediumWeightFontValue
    },
    overline: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(24),
        fontWeight: 'normal'
    },
    caption: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(18),
        fontWeight: mediumWeightFontValue
    },
    labels: {
        fontFamily: 'SRGSSRTypeTextVFApp-Medium',
        fontSize: Style.ratio(20),
        fontWeight: 'bold'
    }
}

Style.styles = StyleSheet.create({
    fullHW: {
        flex: 1
    },
    center: {
        backgroundColor: Colors.BACKGROUND,
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    player: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.BACKGROUND
    },
    gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

export default Style
