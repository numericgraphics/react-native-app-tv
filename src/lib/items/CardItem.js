import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { MediaItemFullDefaultStyle } from '../styles/MediaItemFullDefaultStyle.style'
import { CardItemDefaultStyle } from '../styles/CardItemDefaultStyle.style'

/**
 * @param {String} imageUrl - image url
 * @param {String} title - titre
 * @param {String} bait - bait
 * @param {Object} theme - theme
 */

const CardItem = ({
    imageUrl,
    title,
    bait,
    theme
}) => {
    const style = { ...MediaItemFullDefaultStyle, ...CardItemDefaultStyle, ...theme?.Typography, ...theme?.CardItem }
    return (
        <View style={style.itemContainer}>
            <Image
                resizeMethod={'auto'}
                source={{ uri: `${decodeURIComponent(imageUrl)}${imageUrl.includes('kingfisher') ? '' : '/scale/width/525'}` }}
                style={style.image}
            />
            <LinearGradient
                colors={['rgba(22, 22, 22, 0)', 'rgba(22, 22, 22, 1)']}
                style={style.gradient}
            />
            <View style={[style.textContainer]}>
                <Text numberOfLines={1} style={[style.baitText, style.overline]}>{bait}</Text>
                <Text numberOfLines={2} style={[style.titleText, style.h4]}>{title}</Text>
            </View>
        </View>
    )
}

export default memo(CardItem)
