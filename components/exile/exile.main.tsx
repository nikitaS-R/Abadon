import { useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Animated,
  View,
  Text,
  Vibration,
} from "react-native";
import PerntagramSvg from "../assets/svg/Pentagram";
import { Audio } from "expo-av";
import ExileAtributes from "./exile.attributes";

const Exile = () => {
  const [isPress, setIsPress] = useState<number>(0);
  const [sound1, setSound1] = useState<Audio.Sound>();
  const [sound2, setSound2] = useState<Audio.Sound>();
  const anim = useRef(new Animated.Value(0)).current;
  const callTime: number = 10000;
  const resetTime: number = 1000;
  const random = Math.floor(Math.random() * (1000 - 200) + 200);
  const VIBRO_PATTENR = [1 * random, 1 * random, 1 * random, 1 * random];
  const onPernagramPress = async (e) => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/excorcism.mp3")
    );
    setSound1(sound);
    sound.setVolumeAsync(1);
    if (isPress < 100) {
      await sound.playAsync();
      if (sound2) sound2.unloadAsync();

      Animated.timing(anim, {
        toValue: 100,
        duration: callTime,
        useNativeDriver: true,
      }).start();
      anim.addListener(({ value }) => setIsPress(value));
      Vibration.vibrate(VIBRO_PATTENR, true);
    }
  };
  const onPernagramPressOut = async (event: GestureResponderEvent) => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/woman.mp3")
    );
    setSound2(sound);
    sound.setVolumeAsync(1);
    if (isPress < 100) {
      if (isPress > 20) sound.playAsync();
      Animated.timing(anim, {
        toValue: 0,
        duration: resetTime,
        useNativeDriver: true,
      }).start();
      setIsPress(0);
    }
    sound1.unloadAsync();
    Vibration.cancel();
  };

  return (
    <View style={styled.exileContainer}>
      <View style={styled.exileAtributes}>
        <ExileAtributes />
      </View>
      <Animated.View style={styled.exilePentagram}>
        <TouchableOpacity
          onPressIn={onPernagramPress}
          onPressOut={onPernagramPressOut}
        >
          <PerntagramSvg isPress={isPress} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styled = StyleSheet.create({
  exileContainer: {
    flex: 1,
    backgroundColor: "#64262C",
  },
  exileAtributes: {
    flex: 1,
    zIndex: 10,
  },
  exilePentagram: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Exile;
