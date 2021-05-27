import React, { forwardRef, useRef } from 'react'
import { Animated, TouchableHighlight, View } from 'react-native'

// eslint-disable-next-line react/display-name
const AnimatedFocusableHighlight = forwardRef((props, ref) => {
    const { onPress, onFocus, onBlur, style, children } = props
    const scaleAnimated = useRef(new Animated.Value(1)).current

    const ScaleIn = Animated.timing(
        scaleAnimated,
        {
            toValue: 1.04,
            duration: 130,
            useNativeDriver: true
        }
    )

    const ScaleOut = Animated.timing(
        scaleAnimated,
        {
            toValue: 1,
            duration: 130,
            useNativeDriver: true
        }
    )

    return (
        <TouchableHighlight
            {...props}
            ref={ref}
            onPress={(event) => {
                if (onPress) {
                    onPress(event)
                }
            }}
            onFocus={(event) => {
                ScaleIn.start()
                if (onFocus) {
                    onFocus(event)
                }
            }}
            onBlur={(event) => {
                ScaleOut.start()
                if (onBlur) {
                    onBlur(event)
                }
            }}
            style={[
                style
            ]}>
            <Animated.View style={{ transform: [{ scale: scaleAnimated }] }}>
                {children || <View />}
            </Animated.View>
        </TouchableHighlight>

    )
})

export default AnimatedFocusableHighlight
