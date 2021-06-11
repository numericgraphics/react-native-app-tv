import { Style } from '../utils/Style'
import { Colors } from '../utils/Colors'

export const RoundItemDefaultStyle = {
    itemContainer: {
        width: Style.ratio(200),
        height: Style.ratio(244)
    },
    image: {
        width: Style.ratio(200),
        height: Style.ratio(200),
        borderRadius: Style.ratio(200 / 2)
    },
    textContainer: {
        marginTop: Style.ratio(6),
        backgroundColor: Colors.TRANSPARENT,
        width: Style.ratio(200),
        height: Style.ratio(38)
    },
    titleText: {
        color: Colors.TEXT_PRIMARY_VARIANT,
        textAlign: 'center'
    }
}
