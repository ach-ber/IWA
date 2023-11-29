import IconAwesome from "react-native-vector-icons/FontAwesome"
import { View } from "react-native"
import React from "react"

const RatingStars = ({ rating, size, color, style }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(
            <IconAwesome key={i} name="star" size={size} color={color} />
        )
    }
    while (stars.length < 5) {
        stars.push(
            <IconAwesome key={stars.length} name="star-o" size={size} color={color} />
        )
    }
    return (
        <View style={style}>
            {stars}
        </View>
    )
}

export default RatingStars
