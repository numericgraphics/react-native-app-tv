import React, { memo } from 'react'
import { Text } from 'react-native'
import { SwimLaneTitleDefaultStyle } from '../styles/SwimLaneHeaderTitleDefaultStyle.style'

const SwimLaneHeaderTitle = ({
    title,
    theme
}) => {
    const style = { ...SwimLaneTitleDefaultStyle, ...theme?.Typography, ...theme?.SwimLaneHeaderTitle }

    return (
        <Text numberOfLines={1} style={[style.swimlaneTitleText, style.h2]}>{title}</Text>
    )
}

export default memo(SwimLaneHeaderTitle)
