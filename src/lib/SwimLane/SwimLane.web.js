import React, { forwardRef, useRef, useCallback, useState, useEffect, memo, useContext } from 'react'
import { View, Animated } from 'react-native'
import Style from '../utils/Style'
import { getClonedRenderItem } from '../utils/tools'
import AnimatedFocusableHighlight from '../focusable/AnimatedFocusableHighlight'
import { SwimLaneGenericDefaultStyle } from '../styles/SwimLaneGeneric.style'
import TVAPPContext from '../TVAPPContext'
import { useMediaList } from '../utils/useMediaList'
import AnimatedBorderFocusableHighlight from '../focusable/AnimatedBorderFocusableHighlight'

const SWIMLANE_CELL_WIDTH = Style.ratio(479)

/**
 * @description swimlane for web platform
 * @variation web platform
 * @param {String} id - unique id
 * @param {Array|Object} data - data to render
 * @param {Class} renderItem - render component
 * @param {String=} title - swimlane title
 * @param {Object} parent - { parentIndex: Number, parentName: String }
 * @param {String} type - media type
 * @param {Object} reducer - dispatch action
 * @param {Class} componentStyle - swimlane style
 * @param {Object} focusElementRef - media to focus on start
 * @param {Function} onLayout - params : String name, Array list
 * @param {Function} onItemPress - params : String item
 * @param {Function} onItemFocus  - params : String item, Number index, String key
 * @param {Function} onItemBlur - params : String item
 *
 * @todo Add support for TV Devices: Platform.isTV hasTVPreferredFocus nextFocusLeft nextFocusRight nextFocusTop nextFocusBottom. Next Focused Element need to be showing. Swimlane scroll to index 0 when none of these children are focused. Check and modify setSwimLaneFocus function with the swimlane focus management starting by index 0 at the beginning
 * @see https://github.com/necolas/react-native-web/pull/1566
 **/

const SwimLane = forwardRef(({
    id,
    data,
    renderItem,
    title,
    parent,
    type,
    reducer,
    componentStyle,
    onItemPress,
    onLayout,
    onItemFocus,
    onItemBlur
}, ref) => {
    const { FocusManager, Theme } = useContext(TVAPPContext)
    const { theme } = Theme
    const [focusType] = useState(FocusManager.getFocus().type)
    const [mediaList, loading] = useMediaList(data)
    const rowsRef = useRef([])
    const SwimLaneRef = useRef(null)
    const [isSwimLaneFocused, setSwimLaneFocused] = useState(false)
    const [isSwimLaneElementFocused, setSwimLaneElementFocused] = useState(false)
    const [xPosition] = useState(new Animated.Value(0))
    const style = { ...SwimLaneGenericDefaultStyle, ...theme?.SwimLane, ...componentStyle }
    const { dispatch, action } = reducer || {}
    const { parentIndex, parentName } = parent || {}

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isSwimLaneElementFocused) {
                setSwimLaneFocused(false)
            }
        }, 500)

        if (isSwimLaneElementFocused && !isSwimLaneFocused) {
            setSwimLaneFocused(true)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [isSwimLaneElementFocused])

    // Native animation with use native driver prop
    const goToIndex = (index) => {
        const interval = (SWIMLANE_CELL_WIDTH + Style.ratio(18))
        const length = mediaList.length
        let stepValue = 0
        if (index === 0 || length <= 3) {
            stepValue = 0
        } else if (index > length - 3 && index < length - 1) {
            stepValue = -(((interval) * (index - 1)) - (interval))
        } else if (index >= length - 1) {
            stepValue = -(((interval) * (index - 1)) - (interval * 1.5))
        } else {
            stepValue = -((interval) * (index - 1))
        }

        Animated.timing(
            xPosition,
            {
                toValue: stepValue,
                duration: 350,
                useNativeDriver: true
            }
        ).start(() => {})
    }

    const getRef = useCallback((index) => {
        return (
            (ref) => {
                rowsRef.current[index] = ref
            }
        )
    }, [])

    function onPress (item) {
        const tempItem = { ...item, type }
        if (onItemPress) {
            onItemPress(tempItem)
        }
    }

    function onFocus (item, index, key) {
        FocusManager.setFocus({ ref: rowsRef.current[index], parent, key })
        setSwimLaneElementFocused(true)
        reducer && dispatch({ type: action, index, media: item })
        goToIndex(index)
        if (onItemFocus) {
            onItemFocus(item, index, key)
        }
    }

    function onBlur (item) {
        setSwimLaneElementFocused(false)
        if (onItemBlur) {
            onItemBlur(item)
        }
    }

    function onLayoutCallback (name, list, position) {
        FocusManager.setSwimLanes({ name, list, viewed: false, position })
        if (onLayout) {
            onLayout(name, list, position)
        }
    }

    function setSwimLaneFocus (index) {
        return true // isSwimLaneFocused ? true : index === 0
    }

    const getFocusableProps = (item, index, key) => {
        return {
            ref: getRef(index),
            focusable: setSwimLaneFocus(index),
            onPress: () => onPress(item),
            onFocus: () => onFocus(item, index, key),
            onBlur: () => onBlur(item),
            underlayColor: style.buttonFocusedColor,
            style: [style.itemWeb],
            focusStyle: style.focusStyle
        }
    }

    const buildSwimLaneScale = () => {
        return mediaList.map((item, index) => {
            const { imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description } = item
            const key = `${id}_${index}`
            return <AnimatedFocusableHighlight key={key} nativeID={key} {...getFocusableProps(item, index, key)}>
                {getClonedRenderItem(renderItem, { key: index, imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description, theme })}
            </AnimatedFocusableHighlight>
        })
    }

    const buildSwimLaneBorder = () => {
        return mediaList.map((item, index) => {
            const { imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description } = item
            const key = `${id}_${index}`
            return <AnimatedBorderFocusableHighlight key={key} nativeID={key} {...getFocusableProps(item, index, key)}>
                {getClonedRenderItem(renderItem, { key: index, imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description, theme })}
            </AnimatedBorderFocusableHighlight>
        })
    }

    return (
        <View
            ref={ref}
        >
            {title && title}
            <Animated.View
                ref={SwimLaneRef}
                onLayout={(event) => {
                    onLayoutCallback(`${parentName}_${parentIndex}`, rowsRef.current, event.nativeEvent.layout)
                }}
                style={[style.webView, { transform: [{ translateX: xPosition }] }]}
            >
                {!loading && (focusType === 'border') ? buildSwimLaneBorder() : buildSwimLaneScale()}
            </Animated.View>
        </View>
    )
})

export default memo(SwimLane)
