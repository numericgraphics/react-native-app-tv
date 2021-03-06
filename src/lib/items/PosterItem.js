import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import { MediaItemFullDefaultStyle } from '../styles/MediaItemFullDefaultStyle.style'
import { PosterItemDefaultStyle } from '../styles/PosterItemDefaultStyle.style'

/**
 *
 * @param {String} imageUrl - image url
 * @param {String} title - titre
 * @param {Object} theme - theme
 */

const PosterItem = ({
    imageUrl,
    title,
    theme
}) => {
    const style = { ...MediaItemFullDefaultStyle, ...PosterItemDefaultStyle, ...theme?.Typography, ...theme?.PosterItem }
    return (
        <View style={style.itemContainer}>
            <Image
                resizeMethod={'auto'}
                source={{ uri: `${decodeURIComponent(imageUrl)}${imageUrl.includes('kingfisher') ? '' : '/scale/height/437'}` }}
                style={style.image}
            />
            <View style={[style.textContainer]}>
                <Text numberOfLines={1} style={[style.titleText, style.h4]}>{title}</Text>
            </View>
        </View>
    )
}

export default memo(PosterItem)
