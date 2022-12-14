import React from "react";
//import LottieView from "lottie-react-native";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <Text> Please wait </Text>
    </View>
  );
}

/*
<LottieView
autoPlay
loop
source={require("../assets/animations/loader.json")}
/>
*/

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    backgroundColor: colors.white,
    zIndex: 1,
  },
});

export default ActivityIndicator;
