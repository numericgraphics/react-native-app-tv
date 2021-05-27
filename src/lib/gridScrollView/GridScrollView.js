import React, { useCallback, memo, useContext } from 'react'
import { Text, View } from 'react-native'
import SwimLane from '../SwimLane/SwimLane'
import SwimLaneTitle from '../SwimLane/utils/SwimLaneHeaderTitle'
import MediaItem from '../SwimLane/items/MediaItem'
import { GridScrollViewDefaultStyle } from './style/GridScrollViewDefaultStyle.style'
import { TVAPPContext } from '../../contexts/TVAPPContext'

/** GridScrollView - NATIVE - WEB
 *
 * @param rowData
 * @param route
 * @param type
 * @param parent
 * @param focusElementRef
 * @param onItemPress
 * @param onItemFocus
 * @param onItemBlur
 *******************/

const GridScrollView = ({
    rowData,
    route,
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
                    route={route}
                />
            })}
        </View>
    })

    return (
        <View style={style.row}>
            {buildGrid()}
        </View>
    )
}

export default memo(GridScrollView)
