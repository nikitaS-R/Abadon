import { useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Animated,
  View,
  Text,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import PerntagramSvg from "../assets/svg/Pentagram";
import { Audio } from "expo-av";

const Exile = () => {
  const [isPress, setIsPress] = useState<number>(0);
  const [sound1, setSound1] = useState<Audio.Sound>();
  const [sound2, setSound2] = useState<Audio.Sound>();
  const anim = useRef(new Animated.Value(0)).current;
  const callTime: number = 10000;
  const resetTime: number = 1000;
  const onPernagramPress = async (e) => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/excorcism.mp3")
    );
    setSound1(sound);
    sound.setVolumeAsync(1);
    await sound.playAsync();
    sound2.unloadAsync();
    Animated.timing(anim, {
      toValue: 100,
      duration: callTime,
      useNativeDriver: true,
    }).start();
    anim.addListener(({ value }) => setIsPress(value));
  };
  const onPernagramPressOut = async (event: GestureResponderEvent) => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/woman.mp3")
    );
    setSound2(sound);
    sound.setVolumeAsync(1);
    await sound.playAsync();
    if (isPress < 100) {
      Animated.timing(anim, {
        toValue: 0,
        duration: resetTime,
        useNativeDriver: true,
      }).start();
      setIsPress(0);
    }
    sound1.unloadAsync();
  };
  return (
    <Animated.View style={styled.exileContainer}>
      <TouchableOpacity
        onPressIn={onPernagramPress}
        onPressOut={onPernagramPressOut}
      >
        {/* <Svg viewBox="0 0 200 220" style={{position:'absolute'}} height={300} width={300}>
          <Circle
            cx="100"
            cy="110"
            r="100"
            stroke="blue"
            strokeWidth="10"
            strokeOpacity={0.2}
          />
        </Svg> */}
        <PerntagramSvg isPress={isPress} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styled = StyleSheet.create({
  exileContainer: {
    flex: 1,
    backgroundColor: "#64262C",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Exile;
