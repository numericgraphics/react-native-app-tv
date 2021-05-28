import React from 'react'
import { MEDIA_TYPE } from '../utils/Constants'
import RoundItem from '../items/RoundItem'
import TopicItem from '../items/TopicItem'
import PosterItem from '../items/PosterItem'
import MediaLabelItem from '../items/MediaLabelItem'
import CardItem from '../items/CardItem'
import CarouselItem from '../items/CarouselItem'
import MediaItem from '../items/MediaItem'

function useRenderItem (type) {
    switch (type) {
    case MEDIA_TYPE.ROUND:
        return <RoundItem/>
    case MEDIA_TYPE.TOPIC:
        return <TopicItem/>
    case MEDIA_TYPE.POSTER:
        return <PosterItem/>
    case MEDIA_TYPE.MEDIA_LABEL:
        return <MediaLabelItem/>
    case MEDIA_TYPE.CARD:
        return <CardItem/>
    case MEDIA_TYPE.CAROUSEL:
        return <CarouselItem/>
    case MEDIA_TYPE.MEDIA:
    default:
        return <MediaItem/>
    }
}
export default useRenderItem
