import Style from '../utils/Style'
import Colors from '../utils/Colors'

export const PosterItemDefaultStyle = {
    itemContainer: {
        width: Style.ratio(277),
        height: Style.ratio(437)
    },
    image: {
        width: Style.ratio(277),
        height: Style.ratio(392)
    },
    textContainer: {
        marginTop: Style.ratio(6),
        backgroundColor: Colors.TRANSPARENT,
        width: Style.ratio(277),
        height: Style.ratio(35)
    },
    titleText: {
        color: Colors.TEXT_PRIMARY_VARIANT
    }
}
