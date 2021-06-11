import React from 'react'
import { View } from 'react-native'
import { Style } from '../utils/Style'

/**
 *
 * @param {Number} size - width and height
 * @param {String} color - color
 */

const ColorIcon = ({ size, color }) => {
    return <View
        style={{
            width: Style.ratio(size),
            height: Style.ratio(size),
            borderRadius: Style.ratio(14),
            backgroundColor: color
        }}
    />
}

export default ColorIcon
