import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { MediaItemFullDefaultStyle } from '../styles/MediaItemFullDefaultStyle.style'
import { TopicItemDefaultStyle } from '../styles/TopicItemDefaultStyle.style'

/**
 *
 * @param {String} imageUrl - image url
 * @param {String} title - titre
 * @param {Object} theme - theme
 */

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
                colors={['rgba(22, 22, 22, 0)', 'rgba(22, 22, 22, 1)']}
                style={style.gradient}
            />
            <View style={[style.textContainer]}>
                <Text numberOfLines={1} style={[style.baitText, style.h2]}>{title}</Text>
            </View>
        </View>
    )
}

export default memo(TopicItem)
