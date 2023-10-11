import IconAwesome from "react-native-vector-icons/FontAwesome";
import {View} from "react-native";
import React from "react";

const RatingStars = ({ rating, size, color,style }) => {
    const wholeStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 !== 0;
    const stars = [];
    for (let i = 0; i < wholeStars; i++) {
        stars.push(
            <IconAwesome name="star" size={size} color={color}  />
        );
    }
    if (hasHalfStar) {
        stars.push(
            <IconAwesome name="star-half-empty" size={size} color={color} />
        );
    }
    while (stars.length < 5) {
        stars.push(
            <IconAwesome name="star-o" size={size} color={color} />
        );
    }
    return (
        <View style={style}>
            {stars}
        </View>
    );
};

export default RatingStars;