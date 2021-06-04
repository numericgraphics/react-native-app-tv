import React, { useReducer, useEffect, useState } from 'react'
import { GlobalReducer, GlobalStates, InitialGlobalState } from '../reducers/GlobalReducer'
import TVAPPContext from '../TVAPPContext'
import FocusManager from '../managers/FocusManager'
import { BackHandler, NativeModules, Platform, TVEventHandler } from 'react-native'
import { capitalizeFirstLetter } from '../utils/tools'
import { InitialKeyEventState, KeyEventsReducer, KeyEventStates } from '../reducers/KeyEventsReducer'

function TVAPPProvider ({ children, ...props }) {
    const { config, navigation } = props
    const { SRGExitApp } = NativeModules
    const [state, dispatch] = useReducer(KeyEventsReducer, InitialKeyEventState)
    const KeyEventState = { state, dispatch, KeyEventStates }
    const [globalState, dispatchGlobalState] = useReducer(GlobalReducer, InitialGlobalState)
    const GlobalState = { globalState, dispatchGlobalState, GlobalStates }
    const [theme, setTVAPPContextTheme] = useState({})
    const Theme = { theme, setTVAPPContextTheme }

    function backAction (e) {
        // Exit for tvOS
        if (navigation?.navigationRef.current.getCurrentRoute().name === 'Home' && Platform.OS === 'ios') {
            SRGExitApp.exitApp()
        }

        // Escape actions
        try {
            return !!(
                navigation?.navigationRef.current &&
                navigation?.navigationRef.current.getCurrentRoute().name === 'Home'
            )
        } catch (e) {
            console.log('TVAPPProvider backAction ERROR', e)
        }
    }

    function tvEventHandling (cmp, e) {
        if (
            e.eventType === 'left' ||
        e.eventType === 'right' ||
        e.eventType === 'up' ||
        e.eventType === 'down'
        ) {
            dispatch({ type: `Arrow${capitalizeFirstLetter(e.eventType)}`, payload: { timeStamp: Date.now() } })
        }
    }

    function keyDownAction (e) {
        try {
            if (e.code === 'Escape' && navigation?.navigationRef.current.getCurrentRoute().name !== 'Home') {
                console.log('TVAPPProvider - keyDownAction history back')
                navigation?.navigationRef.current.goBack()
            }
            if (
                e.code === 'ArrowRight' ||
                e.code === 'ArrowLeft' ||
                e.code === 'ArrowDown' ||
                e.code === 'ArrowUp'
            ) {
                // TODO check validity
                // FocusManager.setCurrentKey(e.code)
                dispatch({ type: e.code, payload: { timeStamp: e.timeStamp } })
            }
        } catch (e) {
            console.log('TVAPPProvider - keyDownAction ERROR', e)
        }
    }

    useEffect(() => {
        switch (globalState.type) {
        case GlobalStates.CHANGE_THEME:
            // TODO: no theme object available due the heavy file (need test)
            console.log('TVAPPProvider - CHANGE_THEME', globalState)
            break
        case GlobalStates.DRAWER_OPEN:
            console.log('TVAPPProvider - DRAWER_OPEN', globalState)
            break
        case GlobalStates.DRAWER_CLOSE:
            console.log('TVAPPProvider - DRAWER_CLOSE', globalState)
            break
        }
    }, [globalState])

    useEffect(() => {
        console.log('TVAPPProvider - useEffect init')
        if (Object.entries(config).length > 0) {
            for (const [key, value] of Object.entries(config)) {
                if (key === 'focus') {
                    FocusManager.setFocus(value)
                } else if (key === 'theme') {
                    setTVAPPContextTheme(value)
                }
            }
        }
        if (Platform.OS !== 'web') {
            const tvEventHandler = new TVEventHandler()
            BackHandler.addEventListener('hardwareBackPress', backAction)
            tvEventHandler.enable(this, tvEventHandling)

            return () => {
                console.log('TVAPPProvider - useEffect natif - killed')
                BackHandler.removeEventListener('hardwareBackPress', backAction)
                tvEventHandler.disable()
            }
        } else {
            window.addEventListener('keydown', keyDownAction)
            return () => {
                console.log('APP - useEffect web - killed')
                window.removeEventListener('keydown', keyDownAction)
            }
        }
    }, [])

    return <TVAPPContext.Provider value={{ KeyEventState, GlobalState, FocusManager, Theme }}>{children}</TVAPPContext.Provider>
}

export default TVAPPProvider
