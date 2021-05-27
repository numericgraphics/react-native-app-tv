import Style from '../../../styles/Style'
import { Colors } from '../../../styles/Colors'
import { Platform } from 'react-native'

export const MediaLabelItemDefaultStyle = {
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
        marginTop: Style.ratio(131),
        color: Colors.TEXT_SECONDARY
    },
    titleText: {
        marginLeft: Style.ratio(16),
        marginRight: Style.ratio(16),
        color: Colors.TEXT_SECONDARY
    },
    timeText: {
        position: 'absolute',
        width: Style.ratio(80),
        height: Style.ratio(30),
        top: Style.ratio(16),
        left: Style.ratio(16),
        borderRadius: Style.ratio(2),
        backgroundColor: Colors.SECONDARY_VARIANT,
        color: Colors.TEXT_SECONDARY,
        paddingLeft: Style.ratio(4),
        paddingRight: Style.ratio(4),
        paddingTop: (Platform.OS === 'web' ? Style.ratio(3) : 0),
        textAlign: 'center'
    }
}
