import React, { forwardRef, useRef, useState, useEffect, useCallback, memo, useContext } from 'react'
import { findNodeHandle, ScrollView, View, Platform } from 'react-native'
import { SwimLaneGenericDefaultStyle } from '../styles/SwimLaneGeneric.style'
import AnimatedBorderFocusableHighlight from '../focusable/AnimatedBorderFocusableHighlight'
import AnimatedFocusableHighlight from '../focusable/AnimatedFocusableHighlight'
import TVAPPContext from '../TVAPPContext'
import { useMediaList } from '../utils/useMediaList'
import { getClonedRenderItem } from '../utils/tools'

/** SWIMLANE COMPONENT - NATIVE
 *
 * @param id
 * @param data
 * @param renderItem
 * @param title
 * @param parent
 * @param type
 * @param reducer
 * @param componentStyle
 * @param focusElementRef
 * @param onLayout(name, list)
 * @param onItemPress(item)
 * @param onItemFocus(item, index, key)
 * @param onItemBlur(item)
 *
 *******************/

const SwimLane = forwardRef(({
    id,
    data,
    renderItem,
    title,
    parent,
    type,
    reducer,
    componentStyle,
    focusElementRef,
    onItemPress,
    onLayout,
    onItemFocus,
    onItemBlur
}, ref) => {
    const [mediaList, loading] = useMediaList(data)
    const { FocusManager, Theme } = useContext(TVAPPContext)
    const { theme } = Theme
    const rowsRef = useRef([])
    const SwimLaneRef = useRef(null)
    const [isSwimLaneFocused, setSwimLaneFocused] = useState(false)
    const [isSwimLaneElementFocused, setSwimLaneElementFocused] = useState(false)
    const [focusType, setFocusType] = useState(FocusManager.getFocus().type)
    const style = { ...SwimLaneGenericDefaultStyle, ...theme?.SwimLane, ...componentStyle }
    const { dispatch, action } = reducer || {}
    const { parentIndex, parentName } = parent || {}

    useEffect(() => {
        console.log('swimlane - init')

        return () => {}
    }, [])

    useEffect(() => {
        setFocusType(FocusManager.getFocus().type)
        return () => {}
    }, [FocusManager.getFocus().type])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isSwimLaneElementFocused) {
                setSwimLaneFocused(false)
            }
        }, 500)

        if (isSwimLaneElementFocused && !isSwimLaneFocused) {
            // set the swimLane viewed property to determine the focus behaviour
            FocusManager.modifySwimLane(`${parentName}_${parentIndex}`, 'viewed', true)
            setSwimLaneFocused(true)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [isSwimLaneElementFocused])

    const getRef = useCallback((index) => {
        return (
            (ref) => {
                rowsRef.current[index] = ref
            }
        )
    }, [])

    const onBlur = useCallback((item) => {
        setSwimLaneElementFocused(false)
        if (onItemBlur) {
            onItemBlur(item)
        }
    }, [])

    const onFocus = (item, index, key) => {
        FocusManager.setFocus({ ref: rowsRef.current[index], parent, key })
        // Work around for ios - onfocus Event is dispatched before the last onBlur
        if (Platform.OS === 'ios') {
            const timeout = setTimeout(() => {
                setSwimLaneElementFocused(true)
                clearTimeout(timeout)
            }, 10)
        } else {
            setSwimLaneElementFocused(true)
        }
        reducer && dispatch({ type: action, index, media: item })
        if (onItemFocus) {
            onItemFocus(item, index, key)
        }
    }

    const onPress = useCallback((item) => {
        const tempItem = { ...item, type }
        if (onItemPress) {
            onItemPress(tempItem)
        }
    }, [])

    function onLayoutCallback (name, list) {
        FocusManager.setSwimLanes({ name, list, viewed: false })
        if (onLayout) {
            onLayout(name, list)
        }
    }

    const preferredFocus = (ref) => {
        return ref === focusElementRef
    }

    const getNextFocusRight = useCallback((index) => {
        if (index === (mediaList.length - 1)) {
            return findNodeHandle(rowsRef.current[index])
        }
    }, [])

    const getNextFocusDown = useCallback(() => {
        if (
            FocusManager.getSwimLanes(`${parentName}_${parentIndex + 1}`) &&
            FocusManager.getSwimLanes(`${parentName}_${parentIndex + 1}`).viewed === false
        ) {
            const nextFocusDown = FocusManager.getSwimLanes(`${parentName}_${parentIndex + 1}`).list[0]
            return findNodeHandle(nextFocusDown)
        }
    }, [])

    const getNextFocusLeft = useCallback((index) => {
        if (index === 0 && parentName) {
            const nextFocusLeft = FocusManager.getNextFocusLeft(parentName)
            return findNodeHandle(nextFocusLeft)
        }
    }, [])

    const getFocusableProps = (item, index, key) => {
        return {
            ref: getRef(index),
            hasTVPreferredFocus: preferredFocus(rowsRef.current[index]),
            nextFocusRight: getNextFocusRight(index),
            nextFocusLeft: getNextFocusLeft(index),
            nextFocusDown: getNextFocusDown(index),
            onPress: () => onPress(item),
            onFocus: () => onFocus(item, index, key),
            onBlur: () => onBlur(item),
            underlayColor: style.buttonFocusedColor,
            style: [style.item, { marginLeft: index === 0 ? (Platform.OS === 'ios' ? 50 : 40) : null }],
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
        <View ref={ref}>
            {title && title}
            <ScrollView
                ref={SwimLaneRef}
                nativeID={id}
                key={id}
                onLayout={() => onLayoutCallback(`${parentName}_${parentIndex}`, rowsRef.current)}
                style={style.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                {!loading && (focusType === 'border') ? buildSwimLaneBorder() : buildSwimLaneScale()}
            </ScrollView>
        </View>
    )
})

export default memo(SwimLane)
