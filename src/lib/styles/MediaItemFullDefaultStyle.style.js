import { Style } from '../utils/Style'
import { Colors } from '../utils/Colors'

// TODO: deep merge des attributs ici avec les sous-classes de style par défaut

export const MediaItemFullDefaultStyle = {
    image: {
        width: Style.ratio(479),
        height: Style.ratio(270)
    },
    gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.TRANSPARENT
    },
    titleText: {
        color: Colors.TEXT_SECONDARY,
        textAlign: 'left'
    },
    baitText: {
        color: Colors.TEXT_SECONDARY,
        textAlign: 'left'
    },
    descriptionText: {
        color: Colors.TEXT_SECONDARY,
        textAlign: 'left'
    },
    timeTextContainer: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: Colors.TRANSPARENT
    },
    timeText: {
        position: 'absolute',
        top: 0,
        left: 100,
        backgroundColor: Colors.SECONDARY_VARIANT,
        color: Colors.TEXT_SECONDARY,
        paddingRight: 2,
        width: Style.ratio(130),
        textAlign: 'center'
    }
}
