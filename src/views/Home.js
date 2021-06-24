/* eslint-disable */
import React, { useContext, useEffect, useRef, useState, useCallback } from 'react'
import { SwimLane, TVAPPContext, utils } from '../lib'
import { StyleSheet, ScrollView, View, Platform } from 'react-native'
import data_generic from '../assets/mockData/data_generic.json'

const { useRenderItem, ITEM_TYPE, Style } = utils

const Home = (props) => {
    const { FocusManager } = useContext(TVAPPContext)
    const [focusElementRef, setFocusElementRef] = useState(null)
    const [isReady, setReady] = useState(false)
    const scrollViewRef = useRef(null)
    const [data] = useState(data_generic)

    useEffect(() => {
        setReady(true)
    }, [])

    const onLayout = useCallback(() => {
        const allElement = FocusManager.getAllSwimLanes()
        if (Object.entries(allElement).length > 0) {
            const firstElementRef = FocusManager.getSwimLanes(Object.keys(allElement)[0])
            setFocusElementRef(firstElementRef.list[0])
        }
    })

    const buildComponents = useCallback(() => {
        return data.map((item, index) => {
            const id = `HomePage_${item.type}_${index}`
            return (
                <View key={`HomePage-Dynamic-${index}`}
                      style={{ backgroundColor: '#161616' }}
                      onStartShouldSetResponder={() => true}
                >
                    {(() => {
                        switch (item.type) {
                        case ITEM_TYPE.TOPIC_SELECTOR:
                        case ITEM_TYPE.SWIMLANE:
                            return <SwimLane
                                id={id}
                                key={id}
                                data={item}
                                parent={{ parentIndex: index, parentName: 'Home' }}
                                type={item.type}
                                renderItem={useRenderItem(item.layout.mediaType)}
                                focusElementRef={focusElementRef}
                            />
                        default:
                            return <View/>
                        }
                    })()}
                </View>
            )
        })
    })

    return <View style={styles.center}>
        <View style={styles.content}>
            <ScrollView
                key={'scrollView'}
                ref={scrollViewRef}
                style={[Platform.OS === 'web' ? styles.fullHWWeb : styles.fullHW, {opacity: 1} ]}
                nativeID={'rows'}
                showsVerticalScrollIndicator={false}
                onLayout={() => onLayout()}
            >
                {isReady && buildComponents() }
            </ScrollView>
        </View>
    </View>
}

const styles = StyleSheet.create({
    fullHW: {
        flex: 1,
    },
    fullHWWeb: {
        width: '100vw',
        height: '100vh',

    },
    drawerLeftMargin: {
        marginLeft: Style.ratio(90)
    },
    center: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home
