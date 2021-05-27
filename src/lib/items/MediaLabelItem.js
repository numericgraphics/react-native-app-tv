import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import { MediaItemFullDefaultStyle } from '../style/MediaItemFullDefaultStyle.style'
import { MediaLabelItemDefaultStyle } from '../style/MediaLabelItemDefaultStyle.style'
import LinearGradient from 'react-native-linear-gradient'
import MediaItemTime from '../utils/MediaItemTime'

const MediaLabelItem = ({
    imageUrl,
    title,
    bait,
    isEventStarted,
    prettyHour,
    theme
}) => {
    const style = { ...MediaItemFullDefaultStyle, ...MediaLabelItemDefaultStyle, ...theme?.Typography, ...theme?.MediaItemLabel }
    return (
        <View style={style.itemContainer}>
            <Image
                resizeMethod={'auto'}
                source={{ uri: `${decodeURIComponent(imageUrl)}${imageUrl.includes('kingfisher') ? '' : '/scale/width/479'}` }}
                style={style.image}
            />
            <LinearGradient
                colors={['rgba(26, 26, 26, 0)', 'rgba(26, 26, 26, 0.6)']}
                style={style.gradient}
            />
            <MediaItemTime
                isEventStarted={isEventStarted}
                text={prettyHour}
                style={style.timeText}
                font={style.labels}
                theme={theme}
            />
            <View style={[style.textContainer]}>
                <Text numberOfLines={1} style={[style.baitText, style.overline]}>{bait}</Text>
                <Text numberOfLines={2} style={[style.titleText, style.h4]}>{title}</Text>
            </View>
        </View>
    )
}

export default memo(MediaLabelItem)
