import Style from '../utils/Style'
import { Colors } from '../utils/Colors'

export const FlatScrollViewItemDefaultStyle = {
    itemContainer: {
        width: Style.ratio(423),
        height: Style.ratio(238)
    },
    rowItem: {
        width: 423,
        height: 238,
        margin: Style.ratio(16),
        backgroundColor: '#ffffff',
        borderRadius: Style.ratio(5),
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: Style.ratio(5),
        elevation: 2
    },
    image: {
        width: Style.ratio(423),
        height: Style.ratio(238)
    },
    baitText: {
        marginLeft: Style.ratio(16),
        marginRight: Style.ratio(16),
        marginTop: Style.ratio(78),
        color: Colors.TEXT_SECONDARY
    },
    titleText: {
        marginLeft: Style.ratio(16),
        marginRight: Style.ratio(16),
        color: Colors.TEXT_SECONDARY
    },
    timeText: {
        position: 'absolute',
        width: Style.ratio(70),
        height: Style.ratio(30),
        bottom: Style.ratio(16),
        right: Style.ratio(16),
        borderRadius: Style.ratio(2),
        backgroundColor: Colors.OVERLAY_1,
        color: Colors.TEXT_SECONDARY,
        padding: Style.ratio(2),
        textAlign: 'center'
    },
    gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.TRANSPARENT
    },
    descriptionText: {
        color: Colors.TEXT_SECONDARY,
        textAlign: 'left'
    },
    timeTextContainer: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: Colors.TRANSPARENT
    }
}
