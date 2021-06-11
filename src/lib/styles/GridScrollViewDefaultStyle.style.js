import { Style } from '../utils/Style'
import { Colors } from '../utils/Colors'

export const GridScrollViewDefaultStyle = {
    /* System design
     - space between title and swimlane : 14 (calculation between container marginTop and item paddingTop due to focus element)
     - space between swimlane : 60 (calculation between container marginBottom and item paddingBottom due to focus element)
     - space between items : 36 (item marginRight)
   */
    backgroundImageStyle: {
        width: '100%',
        height: '100%'
    },
    row: {
        flex: 1,
        width: '100%',
        marginLeft: Style.ratio(0),
        height: 'auto',
        backgroundColor: Colors.BACKGROUND
    },
    gridHeaderText: {
        fontFamily: 'Sports-Bold_Cond_Obl',
        fontSize: Style.ratio(48),
        lineHeight: Style.ratio(58),
        color: Colors.TEXT_SECONDARY,
        backgroundColor: Colors.TRANSPARENT,
        marginLeft: Style.ratio(60),
        marginBottom: Style.ratio(20)
    }
}
