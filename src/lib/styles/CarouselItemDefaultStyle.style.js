import { Style } from '../utils/Style'
import { Colors } from '../utils/Colors'
import { Platform } from 'react-native'

export const CarouselItemDefaultStyle = {
    itemContainer: {
        width: Style.ratio(1600),
        height: Style.ratio(754)
    },
    image: {
        width: Style.ratio(1600),
        height: Style.ratio(754)
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.TRANSPARENT
    },
    baitText: {
        position: 'absolute',
        marginLeft: Style.ratio(56),
        marginRight: Style.ratio(56),
        marginTop: Style.ratio(312),
        color: Colors.TEXT_SECONDARY
    },
    titleText: {
        position: 'absolute',
        marginLeft: Style.ratio(56),
        marginRight: Style.ratio(56),
        marginTop: Style.ratio(378),
        color: Colors.TEXT_SECONDARY
    },
    descriptionText: {
        position: 'absolute',
        marginLeft: Style.ratio(56),
        marginRight: Style.ratio(56),
        marginTop: Style.ratio(532),
        color: Colors.TEXT_SECONDARY
    },
    textBackground: {
        position: 'absolute',
        top: Style.ratio(257),
        borderLeftWidth: 0,
        borderRightWidth: Style.ratio(1200),
        borderBottomWidth: Style.ratio(506),
        borderStyle: 'solid',
        backgroundColor: Colors.TRANSPARENT,
        borderLeftColor: Colors.TRANSPARENT,
        borderRightColor: Colors.TRANSPARENT,
        borderBottomColor: Colors.OVERLAY_2
    },
    timeText: {
        position: 'absolute',
        width: Style.ratio(100),
        height: Style.ratio(32),
        top: Style.ratio(454),
        left: Style.ratio(56),
        borderRadius: Style.ratio(2),
        backgroundColor: Colors.SECONDARY_VARIANT,
        color: Colors.TEXT_SECONDARY,
        paddingLeft: Style.ratio(4),
        paddingRight: Style.ratio(4),
        paddingTop: (Platform.OS === 'web' ? Style.ratio(3) : 0),
        textAlign: 'center'
    }
}
