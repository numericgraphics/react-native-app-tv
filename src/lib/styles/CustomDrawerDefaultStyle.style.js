import { Style } from '../utils/Style'
import { Colors } from '../utils/Colors'
import { Dimensions, Platform } from 'react-native'

const windowWidth = Dimensions.get('window').width
export const CustomDrawerDefaultStyle = {
    drawerStyle: {
        position: 'absolute',
        top: 0,
        left: Platform.OS !== 'web' ? (windowWidth) : 0,
        width: 0,
        height: '100%',
        borderWidth: 0,
        backgroundColor: 'transparent'
    },
    container: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.OVERLAY_2,
        borderWidth: 0
    },
    contentContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    cell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: Style.ratio(50),
        padding: Style.ratio(5),
        marginBottom: Style.ratio(25),
        marginTop: Style.ratio(5),
        opacity: 0.6
    },
    focusedCell: {
        opacity: 1
    },
    text: {
        color: Colors.TEXT_SECONDARY,
        fontSize: Style.ratio(15),
        marginLeft: Style.ratio(10)
    },
    logo: {
        width: Style.ratio(28),
        height: Style.ratio(28)
    }
}
