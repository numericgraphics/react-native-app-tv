import React from 'react'
import { View } from 'react-native'
import Style from '../utils/Style'

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
