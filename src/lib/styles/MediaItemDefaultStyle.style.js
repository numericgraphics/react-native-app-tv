import { Style } from '../utils/Style'
import { Colors } from '../utils/Colors'

export const MediaItemDefaultStyle = {
    itemContainer: {
        width: Style.ratio(479),
        height: Style.ratio(270)
    },
    image: {
        width: Style.ratio(479),
        height: Style.ratio(270)
    },
    baitText: {
        marginLeft: Style.ratio(16),
        marginRight: Style.ratio(16),
        marginTop: Style.ratio(98),
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
        paddingLeft: Style.ratio(4),
        paddingRight: Style.ratio(4),
        paddingTop: Style.ratio(3),
        textAlign: 'center'
    }
}
