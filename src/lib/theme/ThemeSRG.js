import { Dimensions, Platform } from 'react-native'
import { Style } from '../utils/Style'
import { hexToRgbA } from '../utils/tools'

const windowWidth = Dimensions.get('window').width
const mediumWeightFontValue = '300'
const lightWeightFontValue = '100'
const flatScrollViewItemWidth = Style.ratio(414)
const flatScrollViewItemHeight = flatScrollViewItemWidth / 1.777777

const innerColors = {
    // Theme SSR
    UNFOCUSED_COLOR: '#262626',
    PLAY_BUTTON_COLOR: '#262626',
    FOCUSED_COLOR: '#FFFFFF',

    // Design system colors
    PRIMARY: '#232323',
    PRIMARY_VARIANT: '#333333',
    SECONDARY: '#AF001D',
    SECONDARY_VARIANT: '#8B0018',
    BACKGROUND: '#161616',
    TEXT_PRIMARY: '#969696',
    TEXT_PRIMARY_VARIANT: '#C7C7C7',
    TEXT_SECONDARY: '#FFFFFF',
    GRADIENT_FIRST: hexToRgbA('#161616', 0.0),
    GRADIENT_SECOND: hexToRgbA('#161616', 1.0),
    OVERLAY_1: hexToRgbA('#161616', 0.5),
    OVERLAY_2: hexToRgbA('#161616', 0.8),
    TRANSPARENT: 'transparent'
}

export const ThemeSRG = {
    Typography: {
        h1: {
            fontFamily: 'SRGSSRTypeDisplayVFApp-Medium',
            fontSize: Style.ratio(50),
            fontWeight: 'bold'
        },
        h2: {
            fontFamily: 'SRGSSRTypeDisplayVFApp-Medium',
            fontSize: Style.ratio(42),
            fontWeight: mediumWeightFontValue
        },
        h3: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(32),
            fontWeight: 'normal'
        },
        h4: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(30),
            fontWeight: mediumWeightFontValue
        },
        subtitle1: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(32),
            fontWeight: lightWeightFontValue
        },
        subtitle2: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(26),
            fontWeight: 'normal'
        },
        body: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(30),
            fontWeight: 'normal'
        },
        button: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(32),
            fontWeight: mediumWeightFontValue
        },
        overline: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(24),
            fontWeight: 'normal'
        },
        caption: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(18),
            fontWeight: mediumWeightFontValue
        },
        labels: {
            fontFamily: 'SRGSSRTypeTextVFApp-Medium',
            fontSize: Style.ratio(20),
            fontWeight: 'bold'
        }
    },
    Colors: {
        BACKGROUND: innerColors.BACKGROUND,
        UNFOCUSED_COLOR: innerColors.UNFOCUSED_COLOR,
        TEXT_SECONDARY: innerColors.TEXT_SECONDARY,
        PLAY_BUTTON_COLOR: innerColors.PLAY_BUTTON_COLOR,
        FOCUSED_COLOR: innerColors.FOCUSED_COLOR,
        SECONDARY: innerColors.SECONDARY,
        SECONDARY_VARIANT: innerColors.SECONDARY_VARIANT,
        OVERLAY_2: innerColors.OVERLAY_2,
        TRANSPARENT: innerColors.TRANSPARENT
    },
    SwimLane: {
        container: {
            backgroundColor: innerColors.BACKGROUND
        },
        webView: {
            height: 'fit-content',
            flexDirection: 'row',
            marginBottom: Style.ratio(10),
            marginLeft: Style.ratio(50),
            marginRight: Style.ratio(5),
            backgroundColor: innerColors.TRANSPARENT
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
        buttonFocusedColor: innerColors.TRANSPARENT
    },
    Drawer: {
        drawerStyle: {
            position: 'absolute',
            top: 0,
            left: Platform.OS !== 'web' ? (windowWidth - 25) : 0,
            width: Platform.OS === 'ios' ? 50 : 25,
            height: '100%',
            backgroundColor: innerColors.OVERLAY_2
        },
        container: {
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: innerColors.OVERLAY_2
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
            color: innerColors.TEXT_SECONDARY,
            fontSize: Style.ratio(15),
            marginLeft: Style.ratio(10)
        },
        logo: {
            width: Style.ratio(28),
            height: Style.ratio(28)
        }
    },
    SwimLaneHeaderTitle: {
        swimlaneTitleText: {
            color: innerColors.TEXT_SECONDARY,
            marginLeft: Style.ratio(80),
            marginRight: Style.ratio(50)
        }
    },
    MediaItemTime: {
        liveText: {
            position: 'absolute',
            width: Style.ratio(100),
            height: Style.ratio(32),
            top: Style.ratio(16),
            right: Style.ratio(16),
            borderRadius: Style.ratio(2),
            backgroundColor: innerColors.PRIMARY_VARIANT,
            color: innerColors.TEXT_SECONDARY,
            paddingLeft: 0,
            paddingRight: 2,
            textAlign: 'center'
        }
    },
    CardItem: {
        itemContainer: {
            width: Style.ratio(525),
            height: Style.ratio(432)
        },
        image: {
            width: Style.ratio(525),
            height: Style.ratio(296)
        },
        textContainer: {
            position: 'absolute',
            width: Style.ratio(525),
            height: Style.ratio(136),
            top: Style.ratio(296),
            backgroundColor: innerColors.PRIMARY
        },
        baitText: {
            marginLeft: Style.ratio(16),
            marginRight: Style.ratio(16),
            marginTop: Style.ratio(12),
            color: innerColors.TEXT_SECONDARY
        },
        titleText: {
            marginLeft: Style.ratio(16),
            marginRight: Style.ratio(16),
            color: innerColors.TEXT_SECONDARY
        }
    },
    CarouselItem: {
        itemContainer: {
            width: Style.ratio(1600),
            height: Style.ratio(754)
        },
        image: {
            width: Style.ratio(1600),
            height: Style.ratio(754)
        },
        textContainer: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: innerColors.TRANSPARENT
        },
        baitText: {
            position: 'absolute',
            marginLeft: Style.ratio(56),
            marginRight: Style.ratio(56),
            marginTop: Style.ratio(312),
            color: innerColors.TEXT_SECONDARY
        },
        titleText: {
            position: 'absolute',
            marginLeft: Style.ratio(56),
            marginRight: Style.ratio(56),
            marginTop: Style.ratio(378),
            color: innerColors.TEXT_SECONDARY
        },
        descriptionText: {
            position: 'absolute',
            marginLeft: Style.ratio(56),
            marginRight: Style.ratio(56),
            marginTop: Style.ratio(532),
            color: innerColors.TEXT_SECONDARY
        },
        textBackground: {
            position: 'absolute',
            top: Style.ratio(257),
            borderLeftWidth: 0,
            borderRightWidth: Style.ratio(1200),
            borderBottomWidth: Style.ratio(506),
            borderStyle: 'solid',
            backgroundColor: innerColors.TRANSPARENT,
            borderLeftColor: innerColors.TRANSPARENT,
            borderRightColor: innerColors.TRANSPARENT,
            borderBottomColor: innerColors.OVERLAY_2
        },
        timeText: {
            position: 'absolute',
            width: Style.ratio(100),
            height: Style.ratio(32),
            top: Style.ratio(454),
            left: Style.ratio(56),
            borderRadius: Style.ratio(2),
            backgroundColor: innerColors.SECONDARY_VARIANT,
            color: innerColors.TEXT_SECONDARY,
            paddingLeft: 0,
            paddingRight: 2,
            textAlign: 'center'
        }
    },
    MediaItem: {
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
            marginTop: Style.ratio(98),
            color: innerColors.TEXT_SECONDARY
        },
        titleText: {
            marginLeft: Style.ratio(16),
            marginRight: Style.ratio(16),
            color: innerColors.TEXT_SECONDARY
        },
        timeText: {
            position: 'absolute',
            width: Style.ratio(70),
            height: Style.ratio(30),
            bottom: Style.ratio(16),
            right: Style.ratio(16),
            borderRadius: Style.ratio(2),
            backgroundColor: innerColors.OVERLAY_1,
            color: innerColors.TEXT_SECONDARY,
            padding: Style.ratio(2),
            textAlign: 'center'
        }
    },
    MediaItemLabel: {
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
            color: innerColors.TEXT_SECONDARY
        },
        titleText: {
            marginLeft: Style.ratio(16),
            marginRight: Style.ratio(16),
            color: innerColors.TEXT_SECONDARY
        },
        timeText: {
            position: 'absolute',
            width: Style.ratio(80),
            height: Style.ratio(30),
            top: Style.ratio(16),
            left: Style.ratio(16),
            borderRadius: Style.ratio(2),
            backgroundColor: innerColors.SECONDARY_VARIANT,
            color: innerColors.TEXT_SECONDARY,
            paddingLeft: 0,
            paddingRight: 2,
            textAlign: 'center'
        }
    },
    PosterItem: {
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
            backgroundColor: innerColors.TRANSPARENT,
            width: Style.ratio(277),
            height: Style.ratio(35)
        },
        titleText: {
            color: innerColors.TEXT_PRIMARY_VARIANT
        }
    },
    RoundItem: {
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
            backgroundColor: innerColors.TRANSPARENT,
            width: Style.ratio(200),
            height: Style.ratio(38)
        },
        titleText: {
            color: innerColors.TEXT_PRIMARY_VARIANT,
            textAlign: 'center'
        }
    },
    TopicItem: {
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
            backgroundColor: innerColors.TRANSPARENT
        },
        baitText: {
            marginLeft: Style.ratio(16),
            marginRight: Style.ratio(16),
            marginTop: Style.ratio(121),
            color: innerColors.TEXT_SECONDARY
        }
    },
    FlatScrollView: {
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
            width: flatScrollViewItemWidth,
            height: flatScrollViewItemHeight
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
            color: innerColors.TEXT_SECONDARY,
            backgroundColor: innerColors.TRANSPARENT,
            marginLeft: Style.ratio(60)
        },
        textContainer: {
            position: 'absolute',
            bottom: 10,
            backgroundColor: innerColors.TRANSPARENT
        }
    },
    GridScrollView: {
        backgroundImageStyle: {
            width: '100%',
            height: '100%'
        },
        row: {
            flex: 1,
            width: '100%',
            marginLeft: Style.ratio(0),
            height: 'auto',
            backgroundColor: innerColors.BACKGROUND
        },
        gridHeaderText: {
            fontFamily: 'Sports-Bold_Cond_Obl',
            fontSize: Style.ratio(48),
            lineHeight: Style.ratio(58),
            color: innerColors.TEXT_SECONDARY,
            backgroundColor: innerColors.TRANSPARENT,
            marginLeft: Style.ratio(60),
            marginBottom: Style.ratio(20)
        }
    },
    FlatScrollViewItem: {
        itemContainer: {
            width: Style.ratio(423),
            height: Style.ratio(238)
        },
        rowItem: {
            width: 423,
            height: 238,
            margin: Style.ratio(16),
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
        image: {
            width: Style.ratio(423),
            height: Style.ratio(238)
        },
        baitText: {
            marginLeft: Style.ratio(16),
            marginRight: Style.ratio(16),
            marginTop: Style.ratio(78),
            color: innerColors.TEXT_SECONDARY
        },
        titleText: {
            marginLeft: Style.ratio(16),
            marginRight: Style.ratio(16),
            color: innerColors.TEXT_SECONDARY
        },
        timeText: {
            position: 'absolute',
            width: Style.ratio(70),
            height: Style.ratio(30),
            bottom: Style.ratio(16),
            right: Style.ratio(16),
            borderRadius: Style.ratio(2),
            backgroundColor: innerColors.OVERLAY_1,
            color: innerColors.TEXT_SECONDARY,
            padding: Style.ratio(2),
            textAlign: 'center'
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
            backgroundColor: innerColors.TRANSPARENT
        },
        descriptionText: {
            color: innerColors.TEXT_SECONDARY,
            textAlign: 'left'
        },
        timeTextContainer: {
            position: 'absolute',
            bottom: 10,
            backgroundColor: innerColors.TRANSPARENT
        }
    }
}
