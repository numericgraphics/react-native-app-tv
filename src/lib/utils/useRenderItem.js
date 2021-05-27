import React from 'react'
import { MEDIA_TYPE } from '../utils/Constants'
import RoundItem from '../components/swimlane/items/RoundItem'
import TopicItem from '../components/swimlane/items/TopicItem'
import PosterItem from '../components/swimlane/items/PosterItem'
import MediaLabelItem from '../components/swimlane/items/MediaLabelItem'
import CardItem from '../components/swimlane/items/CardItem'
import CarouselItem from '../components/swimlane/items/CarouselItem'
import MediaItem from '../components/swimlane/items/MediaItem'

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

export { useRenderItem }
