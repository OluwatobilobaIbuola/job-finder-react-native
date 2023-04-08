import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer}>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderBtn;
