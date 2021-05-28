import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { MediaItemFullDefaultStyle } from '../styles/MediaItemFullDefaultStyle.style'
import { CarouselItemDefaultStyle } from '../styles/CarouselItemDefaultStyle.style'
import MediaItemTime from './MediaItemTime'

const CarouselItem = ({
    imageUrl,
    title,
    bait,
    description,
    isEventStarted,
    prettyHour,
    theme
}) => {
    const style = { ...MediaItemFullDefaultStyle, ...CarouselItemDefaultStyle, ...theme?.Typography, ...theme?.CarouselItem }
    return (
        <View style={style.itemContainer}>
            <Image
                resizeMethod={'auto'}
                source={{ uri: `${decodeURIComponent(imageUrl)}${imageUrl.includes('kingfisher') ? '' : '/scale/width/1600'}` }}
                style={style.image}
            />
            <LinearGradient
                colors={['rgba(26, 26, 26, 0)', 'rgba(26, 26, 26, 0.6)']}
                style={style.gradient}
            />
            <View style={[style.textContainer]}>
                <View style={style.textBackground}/>
                <Text numberOfLines={1} style={[style.baitText, style.h1]}>{bait}</Text>
                <Text numberOfLines={1} style={[style.titleText, style.h2]}>{title}</Text>
                <MediaItemTime
                    isEventStarted={isEventStarted}
                    text={prettyHour}
                    style={style.timeText}
                    font={style.labels}
                    theme={theme}
                />
                <Text numberOfLines={4} style={[style.descriptionText, style.h3]}>{description}</Text>
            </View>
        </View>
    )
}

export default memo(CarouselItem)
