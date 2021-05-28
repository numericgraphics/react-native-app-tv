import React, { memo } from 'react'
import { Text } from 'react-native'
import { MediaItemTimeDefaultStyle } from '../styles/MediaItemTimeDefaultStyle.style'

const MediaItemTime = ({
    isEventStarted,
    text,
    style,
    font,
    theme
}) => {
    const itemStyle = { ...MediaItemTimeDefaultStyle, ...theme?.MediaItemTime }

    let finalText = text
    let finalStyle = style
    const finalFont = font

    if (typeof (isEventStarted) !== 'undefined' && isEventStarted !== null) {
        if (isEventStarted === true) {
            finalText = 'En direct'
            finalStyle = itemStyle.liveText
        }
    }

    return (
        <Text numberOfLines={1} style={[finalStyle, finalFont]}>{ finalText }</Text>
    )
}

export default memo(MediaItemTime)
