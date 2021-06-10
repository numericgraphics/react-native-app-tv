import React, { useCallback, memo, useContext } from 'react'
import { Text, View } from 'react-native'
import SwimLane from '../SwimLane/SwimLane'
import SwimLaneTitle from '../items/SwimLaneHeaderTitle'
import MediaItem from '../items/MediaItem'
import { GridScrollViewDefaultStyle } from '../styles/GridScrollViewDefaultStyle.style'
import TVAPPContext from '../TVAPPContext'

/**
 *
 * @param {Array|Object} rowData - data to render
 * @param {String} type - media type
 * @param {Object} parent - { parentIndex: Number, parentName: String }
 * @param {Object} focusElementRef - media to focus on start
 * @param {Function} onItemPress - params : String item
 * @param {Function} onItemFocus  - params : String item, Number index, String key
 * @param {Function} onItemBlur - params : String item
 **/

const GridScrollView = ({
    rowData,
    type,
    parent,
    focusElementRef,
    onItemPress,
    onItemFocus,
    onItemBlur
}) => {
    const { Theme } = useContext(TVAPPContext)
    const { theme } = Theme
    const style = { ...GridScrollViewDefaultStyle, ...theme?.Typography, ...theme?.GridScrollView }
    const getDatas = useCallback(() => {
        return rowData.content
    })

    const onItemPressCallBack = (item) => {
        onItemPress && onItemPress(item)
    }

    const onItemFocusCallBack = (item, index, key) => {
        onItemFocus && onItemFocus(item, index, key)
    }

    const onItemBlurCallBack = (item) => {
        onItemBlur && onItemBlur(item)
    }

    const buildGrid = useCallback(() => {
        return <View>
            <Text style={[style.gridHeaderText, style.h1, { marginTop: 10, marginBottom: 5 }]}>
                { rowData.title }
            </Text>
            {getDatas().map((swimLane, index) => {
                const key = `HomePage_${type}_${parent.parentIndex + index}`
                return <SwimLane
                    id={key}
                    focusElementRef={focusElementRef}
                    key={key}
                    ref={(ref) => {
                        parent.parentRef.current[index] = ref
                    }}
                    data={swimLane}
                    parent={{
                        parentIndex: parent.parentIndex + index,
                        parentName: parent.parentName
                    }}
                    type={type}
                    renderItem={<MediaItem/>}
                    onItemPress={(item) => onItemPressCallBack(item)}
                    onItemFocus={(item) => onItemFocusCallBack(item, index, key)}
                    onItemBlur={(item) => onItemBlurCallBack(item)}
                    title={
                        <SwimLaneTitle
                            title={swimLane.date}
                            theme={theme}
                        />
                    }
                />
            })}
        </View>
    }, [])

    return (
        <View style={style.row}>
            {buildGrid()}
        </View>
    )
}

export default memo(GridScrollView)
