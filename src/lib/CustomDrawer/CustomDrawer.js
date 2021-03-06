import React, { useEffect, useRef, useState, memo, useCallback, useMemo, useContext } from 'react'
import { Animated, findNodeHandle, Image, Text, View, Platform } from 'react-native'
import { FocusableHighlight } from '../focusable/FocusableHighlight'
import { CustomDrawerDefaultStyle } from '../styles/CustomDrawerDefaultStyle.style'
import { randomColors } from '../utils/tools'
import ColorIcon from '../items/ColorIcon'
import TVAPPContext from '../TVAPPContext/TVAPPContext'

/**
 * @param {Object} theme - theme
 * @param {Object} navigation - form react navigation
 * @param {Object} state - form react navigation
 * @param {Number} miniWidth - drawer mini width
 * @param {Number} maxWidth - drawer max width when is open
 * @param {Object}  options - { icons: Array, customNavigation: Array }
 * @param {Number} timeOutValue - delta between opening and closing without action
 * @example
 * // Custom navigation example :
 * options={
                {
                    icons: [
                        { name: 'Home', source: require('../../assets/images/MediaCenter.png') },
                        // demo profile sans source --> { name: 'Profile', source: require('../../assets/images/Profile.png') },
                        { name: 'Profile' },
                        { name: 'Login', source: require('../../assets/images/Login.png') }
                    ],
                    customNavigation: [
                        { name: 'Theme default', action: (item) => dispatchGlobalState({ type: GlobalStates.CHANGE_THEME, theme: THEMES.DEFAULT }) },
                        { name: 'Theme layout', action: (item) => dispatchGlobalState({ type: GlobalStates.CHANGE_THEME, theme: THEMES.LAYOUT }) }
                    ]
                }
            }
 **/

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
    const style = { ...CustomDrawerDefaultStyle, ...theme?.Typography, ...theme?.Drawer }
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
                    ref={getRef(routes?.length + (index + 1))}
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
                        {isDrawerOpen && <Text style={[style.text, style.h3]}>{item.name}</Text>}
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

    const getNextFocusUp = useCallback((index) => {
        if (index > 0 && buttonsRef.current[index - 1]) {
            return findNodeHandle(buttonsRef.current[index - 1])
        }
    }, [])

    const getNextFocusDown = useCallback((index) => {
        if (buttonsRef.current[index + 1]) {
            return findNodeHandle(buttonsRef.current[index + 1])
        }
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
                        nextFocusUp={getNextFocusUp(index)}
                        nextFocusDown={getNextFocusDown(index)}
                    >
                        <View style={style.contentContainer}>
                            {(icons && icons[index].source)
                                ? Platform.OS === 'web'
                                    ? getIconWeb(icons[index].source)
                                    : getIcon(icons[index].source)
                                : <ColorIcon size={28} color={getRandomColor} />}
                            {isDrawerOpen && <Text style={[style.text, style.h3]}>{route.name}</Text>}
                        </View>
                    </FocusableHighlight>
                )
            })}
            {customNavigation && createCustomNavigation()}
        </Animated.View>
    )
}
export default memo(CustomDrawer)
