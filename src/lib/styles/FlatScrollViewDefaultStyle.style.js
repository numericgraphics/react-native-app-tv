import Style from '../../../styles/Style'
import { Colors } from '../../../styles/Colors'

const itemWidth = Style.ratio(414)
const itemHeight = itemWidth / 1.777777

export const FlatScrollViewDefaultStyle = {
    row: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    rowItem: {
        width: Style.ratio(423),
        height: Style.ratio(238),
        margin: Style.ratio(12),
        backgroundColor: '#ffffff',
        borderRadius: Style.ratio(5),
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: Style.ratio(5),
        elevation: 2
    },
    rowItemFocused: {
        transform: [{ scale: 1.2 }],
        marginLeft: 30,
        marginRight: 30,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 30
        },
        shadowOpacity: 0.29,
        shadowRadius: Style.ratio(5)
    },
    image: {
        borderRadius: Style.ratio(5),
        top: 0,
        left: 0,
        width: itemWidth,
        height: itemHeight
    },
    title_container: {
        margin: 10
    },
    scrollViewHeader: {
        width: '100%',
        color: 'white',
        fontSize: Style.ratio(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    swimlaneHeaderText1: {
        fontFamily: 'Sports-Bold_Cond_Obl',
        fontSize: Style.ratio(48),
        lineHeight: Style.ratio(58),
        color: Colors.TEXT_SECONDARY,
        backgroundColor: Colors.TRANSPARENT,
        marginLeft: Style.ratio(60)
    },
    textContainer: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: Colors.TRANSPARENT
    }
}
