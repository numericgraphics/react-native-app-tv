import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MediaItemTime from '../../swimlane/utils/MediaItemTime'
import { FlatScrollViewItemDefaultStyle } from '../style/FlatScrollViewItemDefaultStyle.style'

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
                colors={['rgba(26, 26, 26, 0)', 'rgba(26, 26, 26, 0.6)']}
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
