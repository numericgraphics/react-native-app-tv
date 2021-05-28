/* eslint-disable */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SwimLane, TVAPPContext, useRenderItem } from '../lib'
import { StyleSheet, Text, View } from 'react-native'
import mockData from '../assets/mockData/mockData'

const Home = (props) => {
    const { FocusManager, GlobalState } = useContext(TVAPPContext)
    const swimLaneRef = useRef(null)
    const [data] = useState(mockData[0])

    useEffect(() => {
        console.log('Home - useEffect init')

    }, [])

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text}>RTS APP TV</Text>
            <Text style={styles.subText}>home</Text>
        </View>
        <View style={styles.content}>
            {data && <SwimLane
                id={'test'}
                ref={swimLaneRef}
                type={data?.layout.mediaType}
                data={data}
                parent={{ parentIndex: 0, parentName: 'home' }}
                renderItem={useRenderItem(data?.layout.mediaType)}
                onItemPress={(item) => {
                    console.log('onItemPress', item)
                }}
            />}
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'orange'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 2
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    subText: {
        fontSize: 15,
        fontWeight: '200',
        color: 'gray'
    }
})

export default Home
