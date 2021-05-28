import React, { useContext, useEffect } from 'react'
import { SwimLane, TVAPPContext } from '../lib'
import { StyleSheet, Text, View } from 'react-native'
const Home = (props) => {
    const { FocusManager, GlobalState } = useContext(TVAPPContext)

    useEffect(() => {
        // acces au FocusManager et GlobalState
        console.log('Home - useEffect FocusManager', FocusManager)
        console.log('Home - useEffect GlobalState', GlobalState)
        console.log('Home - useEffect GlobalState', SwimLane)
    }, [])

    return <View style={styles.container}>
        <Text style={styles.text}>RTS APP TV</Text>
        <Text style={styles.subText}>home</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
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
