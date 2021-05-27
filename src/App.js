import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>RTS APP TV</Text>
            <Text style={styles.subText}>template</Text>
        </View>
    )
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

export default App
