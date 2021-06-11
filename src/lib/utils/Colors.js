import { hexToRgbA } from '../utils/tools'

export const Colors = {
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
