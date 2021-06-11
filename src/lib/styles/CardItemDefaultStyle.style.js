import { Style } from '../utils/Style'
import { Colors } from '../utils/Colors'

export const CardItemDefaultStyle = {
    itemContainer: {
        width: Style.ratio(525),
        height: Style.ratio(432)
    },
    image: {
        width: Style.ratio(525),
        height: Style.ratio(296)
    },
    textContainer: {
        position: 'absolute',
        width: Style.ratio(525),
        height: Style.ratio(136),
        top: Style.ratio(296),
        backgroundColor: Colors.PRIMARY
    },
    baitText: {
        marginLeft: Style.ratio(16),
        marginRight: Style.ratio(16),
        marginTop: Style.ratio(12),
        color: Colors.TEXT_SECONDARY
    },
    titleText: {
        marginLeft: Style.ratio(16),
        marginRight: Style.ratio(16),
        color: Colors.TEXT_SECONDARY
    }
}
