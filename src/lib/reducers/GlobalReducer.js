
export const InitialGlobalState = {
    theme: 'layout'
}

export const GlobalStates = Object.freeze({
    CHANGE_THEME: 'ChangeTheme',
    DRAWER_OPEN: 'DrawerOpen',
    DRAWER_CLOSE: 'DrawerClose'
})

export function GlobalReducer (state, action) {
    switch (action.type) {
    case GlobalStates.CHANGE_THEME :
        return { ...state, theme: action.theme, type: action.type }
    case GlobalStates.DRAWER_OPEN :
        return { ...state, type: action.type }
    case GlobalStates.DRAWER_CLOSE :
        return { ...state, type: action.type }
    }
}
