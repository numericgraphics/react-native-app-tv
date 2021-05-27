import React, { useState, forwardRef } from 'react'
import { TouchableHighlight, View } from 'react-native'

// eslint-disable-next-line react/display-name
const FocusableHighlight = forwardRef((props, ref) => {
    const [focused, setFocused] = useState(false)

    return (
        <TouchableHighlight
            {...props}
            ref={ref}
            onPress={(event) => {
                setFocused(true)
                if (props.onPress) {
                    props.onPress(event)
                }
            }}
            onFocus={(event) => {
                setFocused(true)
                if (props.onFocus) {
                    props.onFocus(event)
                }
            }}
            onBlur={(event) => {
                setFocused(false)
                if (props.onBlur) {
                    props.onBlur(event)
                }
            }}
            style={[
                props.style,
                focused && {
                    backgroundColor: props.underlayColor,
                    opacity: props.activeOpacity
                },
                focused && props.styleFocused
            ]}>
            {props.children || <View />}
        </TouchableHighlight>
    )
})

export default FocusableHighlight
