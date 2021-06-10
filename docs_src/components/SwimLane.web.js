
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
 * @todo Add support for TV Devices: Platform.isTV hasTVPreferredFocus nextFocusLeft nextFocusRight nextFocusTop nextFocusBottom. Next Focused Element need to be showing. Swimlane scroll to index 0 when none of these children are focused. Check and modify setSwimLaneFocus function with the swimlane focus management starting by index 0 at the beginning
 * @see https://github.com/necolas/react-native-web/pull/1566
 *
 */

const SwimLane = () => {
    return null
}

export default SwimLane
