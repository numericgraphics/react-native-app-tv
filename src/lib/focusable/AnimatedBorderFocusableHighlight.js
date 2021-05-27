import React, { forwardRef, useRef } from 'react'
import { Animated, TouchableHighlight, View } from 'react-native'

// eslint-disable-next-line react/display-name
const AnimatedBorderFocusableHighlight = forwardRef((props, ref) => {
    const { onPress, onFocus, onBlur, focusStyle, children } = props
    const fadeAnimated = useRef(new Animated.Value(0)).current

    const FadeIn = Animated.timing(
        fadeAnimated,
        {
            toValue: 1,
            duration: 130,
            useNativeDriver: true
        }
    )

    const FadeOut = Animated.timing(
        fadeAnimated,
        {
            toValue: 0,
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
                FadeIn.start()
                if (onFocus) {
                    onFocus(event)
                }
            }}
            onBlur={(event) => {
                FadeOut.start()
                if (onBlur) {
                    onBlur(event)
                }
            }}
        >
            <View>
                <Animated.View style={[focusStyle, { opacity: fadeAnimated }]}/>
                {children || <View />}
            </View>
        </TouchableHighlight>

    )
})

export default AnimatedBorderFocusableHighlight
