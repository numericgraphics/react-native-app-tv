import React, { useEffect, useRef, useState, memo, useCallback, useMemo, useContext } from 'react'
import { Animated, findNodeHandle, Image, Text, View, Platform } from 'react-native'
import FocusableHighlight from '../focusable/FocusableHighlight'
import { CustomDrawerDefaultStyle } from '../styles/CustomDrawerDefaultStyle.style'
import { randomColors } from '../utils/tools'
import ColorIcon from '../items/ColorIcon'
import TVAPPContext from '../TVAPPContext/TVAPPContext'

/** CUSTOM DRAWER WEB / NATIVE
 *
 * @param theme
 * @param navigation
 * @param state
 * @param miniWidth
 * @param maxWidth
 * @param options(icons, customNavigation)
 * @param timeOutValue
 *
 *******************/

function CustomDrawer ({
    theme,
    navigation,
    state,
    miniWidth,
    maxWidth,
    options = {},
    timeOutValue
}) {
    const { GlobalState, FocusManager } = useContext(TVAPPContext)
    const { dispatchGlobalState, GlobalStates } = GlobalState
    const { routes } = state
    const [scaleValue] = useState(new Animated.Value(miniWidth))
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const [isFocused, setFocused] = useState(false)
    const [icons, setIcons] = useState(undefined)
    const [customNavigation, setCustomNavigation] = useState(undefined)
    const style = { ...CustomDrawerDefaultStyle, ...theme }
    const buttonsRef = useRef([])

    function focused () {
        Animated.timing(scaleValue, {
            toValue: maxWidth,
            duration: 350,
            useNativeDriver: false
        }).start(() => {
            setDrawerOpen(true)
            dispatchGlobalState({ type: GlobalStates.DRAWER_OPEN })
        })
    }

    function unFocused () {
        setDrawerOpen(false)
        Animated.timing(scaleValue, {
            toValue: miniWidth,
            duration: 350,
            useNativeDriver: false
        }).start(() => {
            dispatchGlobalState({ type: GlobalStates.DRAWER_CLOSE })
        })
    }

    function onFocus () {
        setFocused(true)
        navigation.openDrawer()
        if (!isDrawerOpen) {
            focused()
        }
    }

    function onBlur () {
        setFocused(false)
    }

    function onLayout (name, index) {
        FocusManager.setDrawer({ name, ref: buttonsRef.current[index] })
    }

    function onPress (route) {
        navigation.navigate(route)
        navigation.closeDrawer()
    }

    const getRandomColor = useMemo(() => `#${randomColors()}`, [])

    const createCustomNavigation = useCallback(() => {
        return customNavigation.map((item, index) => {
            return (
                <FocusableHighlight
                    key={`customNavigation${index}`}
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                    onPress={() => {
                        item.action(item)
                        navigation.closeDrawer()
                    }}
                    style={style.cell}
                    styleFocused={style.focusedCell}>
                    <View style={style.contentContainer}>
                        {item.source ? getIcon(item.source) : <ColorIcon size={28} color={getRandomColor} />}
                        {isDrawerOpen && <Text style={style.text}>{item.name}</Text>}
                    </View>
                </FocusableHighlight>
            )
        })
    }, [])

    function getRef (index) {
        return (
            (ref) => {
                buttonsRef.current[index] = ref
            }
        )
    }

    const getIcon = (source) => {
        return <Image
            style={style.logo}
            source={{ uri: Image.resolveAssetSource(source).uri }}
        />
    }

    const getIconWeb = (source) => {
        return <Image
            style={style.logo}
            source={source.default}
        />
    }

    const getNextFocusRight = useCallback(() => {
        const nextFocusRight = FocusManager.getFocus()
        return findNodeHandle(nextFocusRight.ref)
    }, [])

    useEffect(() => {
        if (Object.entries(options).length > 0) {
            for (const [key, value] of Object.entries(options)) {
                if (key === 'icons') { setIcons(value) } else if (key === 'customNavigation') { setCustomNavigation(value) }
            }
        }
        return () => {
            console.log('CustomDrawer LEAVE')
        }
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isFocused) {
                unFocused()
            }
        }, timeOutValue)

        return () => clearTimeout(timeout)
    }, [isFocused])

    return (
        <Animated.View
            style={[style.container, { width: scaleValue }]}
        >
            {routes.map((route, index) => {
                return (
                    <FocusableHighlight
                        key={index}
                        ref={getRef(index)}
                        onFocus={() => onFocus()}
                        onBlur={() => onBlur()}
                        onPress={() => onPress(route)}
                        style={style.cell}
                        styleFocused={style.focusedCell}
                        onLayout={() => onLayout(route.name, index)}
                        nextFocusRight={getNextFocusRight()}
                    >
                        <View style={style.contentContainer}>
                            {(icons && icons[index].source)
                                ? Platform.OS === 'web'
                                    ? getIconWeb(icons[index].source)
                                    : getIcon(icons[index].source)
                                : <ColorIcon size={28} color={getRandomColor} />}
                            {isDrawerOpen && <Text style={style.text}>{route.name}</Text>}
                        </View>
                    </FocusableHighlight>
                )
            })}
            {customNavigation && createCustomNavigation()}
        </Animated.View>
    )
}
export default memo(CustomDrawer)
