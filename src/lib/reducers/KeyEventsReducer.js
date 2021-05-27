
export const InitialKeyEventState = {
    type: null,
    timeStamp: null
}

export const KeyEventStates = Object.freeze({
    KEY_UP: 'ArrowUp',
    KEY_DOWN: 'ArrowDown',
    KEY_RIGHT: 'ArrowRight',
    KEY_LEFT: 'ArrowLeft'
})

export function KeyEventsReducer (state, action) {
    switch (action.type) {
    case KeyEventStates.KEY_UP :
    case KeyEventStates.KEY_DOWN :
    case KeyEventStates.KEY_RIGHT :
    case KeyEventStates.KEY_LEFT :
        return { ...state, timeStamp: action.payload, type: action.type }
    }
}
