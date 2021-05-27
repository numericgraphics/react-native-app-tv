import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import { MediaItemFullDefaultStyle } from '../style/MediaItemFullDefaultStyle.style'
import { RoundItemDefaultStyle } from '../style/RoundItemDefaultStyle.style'

const RoundItem = ({
    imageUrl,
    title,
    theme
}) => {
    const style = { ...MediaItemFullDefaultStyle, ...RoundItemDefaultStyle, ...theme?.Typography, ...theme?.RoundItem }
    return (
        <View style={style.itemContainer}>
            <Image
                resizeMethod={'auto'}
                source={{ uri: `${decodeURIComponent(imageUrl)}${imageUrl.includes('kingfisher') ? '' : '/scale/width/200'}` }}
                style={style.image}
            />
            <View style={[style.textContainer]}>
                <Text numberOfLines={1} style={[style.titleText, style.h4]}>{title}</Text>
            </View>
        </View>
    )
}

export default memo(RoundItem)
