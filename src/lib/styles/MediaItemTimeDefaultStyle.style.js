import Style from '../utils/Style'
import { Colors } from '../utils/Colors'
import { Platform } from 'react-native'

export const MediaItemTimeDefaultStyle = {
    liveText: {
        position: 'absolute',
        width: Style.ratio(100),
        height: Style.ratio(32),
        top: Style.ratio(16),
        right: Style.ratio(16),
        borderRadius: Style.ratio(2),
        backgroundColor: Colors.PRIMARY_VARIANT,
        color: Colors.TEXT_SECONDARY,
        paddingLeft: Style.ratio(4),
        paddingRight: Style.ratio(4),
        paddingTop: (Platform.OS === 'web' ? Style.ratio(3) : 0),
        textAlign: 'center'
    }
}
