import Style from '../utils/Style'
import Colors from '../utils/Colors'

export const TopicItemDefaultStyle = {
    itemContainer: {
        width: Style.ratio(526),
        height: Style.ratio(296)
    },
    image: {
        width: Style.ratio(526),
        height: Style.ratio(296)
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.TRANSPARENT
    },
    baitText: {
        marginLeft: Style.ratio(16),
        marginRight: Style.ratio(16),
        marginTop: Style.ratio(121),
        color: Colors.TEXT_SECONDARY
    }
}
