import React, { createRef, useEffect, useRef, useState, useCallback, useContext } from 'react'
import { Text, View, findNodeHandle } from 'react-native'
import AnimatedFocusableHighlight from '../focusable/AnimatedFocusableHighlight'
import { FlatScrollViewDefaultStyle } from '../styles/FlatScrollViewDefaultStyle.style'
import FlatScrollViewItem from '../items/FlatScrollViewItem'
import { useMediaList } from '../utils/useMediaList'
import TVAPPContext from '../TVAPPContext'
import { getClonedRenderItem } from '../utils/tools'
import AnimatedBorderFocusableHighlight from '../focusable/AnimatedBorderFocusableHighlight'

/** FlatScrollView - NATIVE -WEB
 *
 * @param id
 * @param rowData
 * @param onItemPress
 *
 *************/

const FlatScrollView = ({
    id,
    rowData,
    onItemPress
}) => {
    const [mediaList, loading] = useMediaList(rowData)
    const { FocusManager, Theme } = useContext(TVAPPContext)
    const { theme } = Theme
    const style = { ...FlatScrollViewDefaultStyle, ...theme?.Typography, ...theme.FlatScrollView }
    const [data, setData] = useState({})
    const [focusType, setFocusType] = useState(FocusManager.getFocus().type)
    const flatListRef = createRef()
    const rowRefs = useRef([])

    useEffect(() => {
        try {
            if (Array.isArray(rowData)) {
                setData(rowData[0])
            } else {
                setData(rowData)
            }
        } catch (e) {
            console.log('ERROR - FlatScrollView data', e)
        }
    }, [rowData])

    useEffect(() => {
        setFocusType(FocusManager.getFocus().type)
        return () => {}
    }, [FocusManager.getFocus().type])

    const getRef = useCallback((index) => {
        return (
            (ref) => {
                rowRefs.current[index] = ref
            }
        )
    })

    const onPress = useCallback((item) => {
        if (onItemPress) {
            onItemPress(item)
        }
    })

    const onFocus = (index) => {
        if (index % 4 === 3) {
            rowRefs.current[index].setNativeProps({ nextFocusRight: findNodeHandle(rowRefs.current[index]) })
        }
        if (index % 4 === 0) {
            rowRefs.current[index].setNativeProps({ nextFocusLeft: findNodeHandle(rowRefs.current[index]) })
        }
    }

    const getFocusableProps = (item, index) => {
        return {
            ref: getRef(index),
            onPress: () => onPress(item),
            onFocus: () => onFocus(index),
            underlayColor: style.buttonFocusedColor,
            style: style.rowItem
        }
    }

    const buildSwimLaneScale = useCallback(() => {
        return mediaList.map((item, index) => {
            const { imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description } = item
            const key = `${id}_${index}`
            return <AnimatedFocusableHighlight key={key} nativeID={key} {...getFocusableProps(item, index)}>
                {getClonedRenderItem(<FlatScrollViewItem/>, { key: index, imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description, theme })}
            </AnimatedFocusableHighlight>
        })
    })

    const buildSwimLaneBorder = useCallback(() => {
        return mediaList.map((item, index) => {
            const { imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description } = item
            const key = `${id}_${index}`
            return <AnimatedBorderFocusableHighlight key={key} nativeID={key} {...getFocusableProps(item, index)}>
                {getClonedRenderItem(<FlatScrollViewItem/>, { key: index, imageUrl, isEventStarted, prettyHour, prettyDuration, bait, title, description, theme })}
            </AnimatedBorderFocusableHighlight>
        })
    })

    return (
        <View style={style.row} ref={flatListRef}>
            {data.title && <View style={style.title_container} >
                <Text style={style.swimlaneHeaderText1}>{data.title}</Text>
            </View>}
            {!loading && <View style={style.list}>
                {!loading && (focusType === 'border')
                    ? buildSwimLaneBorder()
                    : buildSwimLaneScale() }
            </View>}
        </View>
    )
}
export default FlatScrollView
