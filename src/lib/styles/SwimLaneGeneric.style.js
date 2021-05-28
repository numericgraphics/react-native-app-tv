import Style from '../utils/Style'
import { Colors } from '../utils/Colors'

export const SwimLaneGenericDefaultStyle = {
    /* System design
       - space between title and swimlane : 14 (calculation between container marginTop and item paddingTop due to focus element)
       - space between swimlane : 60 (calculation between container marginBottom and item paddingBottom due to focus element)
       - space between items : 36 (item marginRight)
     */
    container: {
        backgroundColor: Colors.TRANSPARENT
    },
    webView: {
        height: 'fit-content',
        flexDirection: 'row',
        marginBottom: Style.ratio(10),
        marginLeft: Style.ratio(50),
        marginRight: Style.ratio(5),
        backgroundColor: 'transparent'
    },
    item: {
        paddingTop: Style.ratio(14),
        paddingBottom: Style.ratio(60),
        paddingRight: Style.ratio(36)
    },
    itemWeb: {
        marginTop: Style.ratio(14),
        marginBottom: Style.ratio(60),
        marginRight: Style.ratio(18),
        marginLeft: Style.ratio(18)
    },
    buttonFocusedColor: Colors.TRANSPARENT,
    focusStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderWidth: 3,
        borderColor: 'white',
        zIndex: 1,
        borderRadius: 2
    }
}
