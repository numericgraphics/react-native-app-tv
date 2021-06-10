
/**
 *
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
}) {}
export default CustomDrawer
