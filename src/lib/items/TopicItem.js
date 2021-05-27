import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import { MediaItemFullDefaultStyle } from '../style/MediaItemFullDefaultStyle.style'
import { TopicItemDefaultStyle } from '../style/TopicItemDefaultStyle.style'
import LinearGradient from 'react-native-linear-gradient'

const TopicItem = ({
    imageUrl,
    title,
    theme
}) => {
    const style = { ...MediaItemFullDefaultStyle, ...TopicItemDefaultStyle, ...theme?.Typography, ...theme?.TopicItem }
    return (
        <View style={style.itemContainer}>
            <Image
                resizeMethod={'auto'}
                source={{ uri: `${decodeURIComponent(imageUrl)}${imageUrl.includes('kingfisher') ? '' : '/scale/width/526'}` }}
                style={style.image}
            />
            <LinearGradient
                colors={['rgba(26, 26, 26, 0)', 'rgba(26, 26, 26, 0.6)']}
                style={style.gradient}
            />
            <View style={[style.textContainer]}>
                <Text numberOfLines={1} style={[style.baitText, style.h2]}>{title}</Text>
            </View>
        </View>
    )
}

export default memo(TopicItem)
