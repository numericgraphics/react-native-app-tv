import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MediaItemTime from './MediaItemTime'
import { FlatScrollViewItemDefaultStyle } from '../styles/FlatScrollViewItemDefaultStyle.style'

/**
 *
 * @param {String} imageUrl - image url
 * @param {String} title - titre
 * @param {String} bait - bait
 * @param {boolean} isEventStarted - is event started
 * @param {String} prettyDuration - time to start
 * @param {Object} theme - theme
 */

const FlatScrollViewItem = ({
    imageUrl,
    title,
    bait,
    isEventStarted,
    prettyDuration,
    theme
}) => {
    const style = { ...FlatScrollViewItemDefaultStyle, ...theme?.Typography, ...theme.FlatScrollViewItem }
    return (
        <View style={style.itemContainer}>
            <Image
                resizeMethod={'auto'}
                source={{ uri: `${decodeURIComponent(imageUrl)}${imageUrl.includes('kingfisher') ? '' : '/scale/width/256'}` }}
                style={style.image}
            />
            <LinearGradient
                colors={['rgba(22, 22, 22, 0)', 'rgba(22, 22, 22, 1)']}
                style={style.gradient}
            />
            <MediaItemTime
                isEventStarted={isEventStarted}
                text={prettyDuration}
                style={style.timeText}
                font={style.caption}
                theme={theme}
            />
            <View style={[style.textContainer]}>
                <Text numberOfLines={1} style={[style.baitText, style.overline]}>{bait}</Text>
                <Text numberOfLines={2} style={[style.titleText, style.h4]}>{title}</Text>
            </View>
        </View>
    )
}

export default memo(FlatScrollViewItem)
