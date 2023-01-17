import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AnimatedImage from "./HomeAnumatedImage";
import { Audio } from "expo-av";

const Home = (props) => {
  const [sound, setSound] = useState<Audio.Sound>();
  const [isMute, setIsMute] = useState<boolean>(true);
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/ghost.mp3")
    );
    setSound(sound);
    await sound.setIsLoopingAsync(true);
    sound.setVolumeAsync(0.1);
    await sound.playAsync();
  };
  const stopSound = () => {
    sound.unloadAsync();
  };
  const onMuteChange = () => {
    setIsMute((prev) => !prev);
  };
  useEffect(() => {
    if (props.isSound && isMute) {
      playSound();
    } else if (sound || !isMute) {
      stopSound();
    }
  }, [props.isSound, isMute]);

  return (
    <View style={styled.homeContainer}>
      <View style={styled.volumeButton}>
        <TouchableOpacity onPress={onMuteChange}>
          <Image
            style={styled.volumeIcon}
            source={isMute ? require("../../assets/images/up.png") : require("../../assets/images/mute.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styled.homeTop}>
        <Text style={styled.homeHeader}>Welcome to hell</Text>
      </View>
      <View style={styled.homeCenter}>
        <Text style={styled.homeText}>
          Providing you with information about 30 demons. Here you will find all
          the information about them, as well as the way to summon them
        </Text>
        <Text style={[styled.homeText, styled.homeCommit]}>
          Be careful. They can hear you.
        </Text>
      </View>
      <View style={styled.homeBottom}>
        <AnimatedImage />
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  homeContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#64262C",
  },
  volumeButton: {
    paddingRight: 10,
    paddingTop: 10,
    alignSelf: "flex-end",
  },
  volumeIcon: {
    width: 40,
    height: 40,
  },
  homeTop: {
    flex: 1,
    justifyContent: "center",
  },
  homeCenter: {
    flex: 1,
  },
  homeBottom: {
    flex: 1,
    justifyContent: "center",
    borderColor: "red",
  },
  homeHeader: {
    fontSize: 84,
    color: "#f0c4a8",
    fontFamily: "BeastText",
  },
  homeText: {
    fontSize: 24,
    color: "#f0c4a8",
    fontFamily: "RalewayText",
    textAlign: "center",
  },
  homeCommit: {
    fontSize: 18,
  },
});

export default Home;
