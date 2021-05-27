import React, { createRef, useEffect, useRef, useState, useCallback } from 'react'
import { Text, View, findNodeHandle } from 'react-native'
import AnimatedFocusableHighlight from '../focusable/AnimatedFocusableHighlight'
import { navigate } from '../../Navigation'
import { FlatScrollViewDefaultStyle } from './style/FlatScrollViewDefaultStyle.style'
import FlatScrollViewItem from './items/FlatScrollViewItem'

/** FlatScrollView - NATIVE -WEB
 *
 * @param rowData
 * @param route
 * @param theme
 *
 *************/

const FlatScrollView = ({
    rowData,
    route,
    theme
}) => {
    const style = { ...FlatScrollViewDefaultStyle, ...theme?.Typography, ...theme.FlatScrollView }
    const [isReady, setReady] = useState(false)
    const [data, setData] = useState({})
    const [mediaList, setMediaList] = useState([])
    const flatListRef = createRef()
    const rowRefs = useRef([])

    useEffect(() => {
        try {
            if (Array.isArray(rowData)) {
                setData(rowData[0])
                setMediaList(rowData[0].mediaList)
            } else {
                setData(rowData)
                setMediaList(rowData.items || rowData.mediaList)
            }
            setReady(true)
        } catch (e) {
            console.log('ERROR - FlatScrollView data', e)
        }
    }, [rowData])

    const renderItems = useCallback(() => {
        return mediaList.map((item, index) => {
            const { imageUrl, isEventStarted, prettyDuration, bait, imageTitle, description } = item
            const key = 'FlatScrollView_item_' + item.id
            return (
                <AnimatedFocusableHighlight
                    nativeID={key}
                    key={key}
                    ref={(ref) => {
                        rowRefs.current[index] = ref
                    }}
                    onPress={() => {
                        navigate(route, { data: { item } })
                    }}
                    onFocus={() => {
                        if (index % 4 === 3) {
                            rowRefs.current[index].setNativeProps({ nextFocusRight: findNodeHandle(rowRefs.current[index]) })
                        }
                        if (index % 4 === 0) {
                            rowRefs.current[index].setNativeProps({ nextFocusLeft: findNodeHandle(rowRefs.current[index]) })
                        }
                    }}
                    underlayColor={style.buttonFocusedColor}
                    style={style.rowItem}
                >
                    <FlatScrollViewItem
                        imageUrl={imageUrl}
                        title={imageTitle}
                        description={description}
                        bait={bait}
                        isEventStarted={isEventStarted}
                        prettyDuration={prettyDuration}
                        theme={theme}
                    />
                </AnimatedFocusableHighlight>
            )
        })
    })

    return (
        <View style={style.row} ref={flatListRef}>
            {data.title && <View style={style.title_container} >
                <Text style={style.swimlaneHeaderText1}>{data.title}</Text>
            </View>}
            {isReady && <View style={style.list}>
                {renderItems()}
            </View>}
        </View>
    )
}
export default FlatScrollView
