import { useEffect, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

type ImageSliderProps = {
  images: any[];
};

const { width } = Dimensions.get("window");
const height = width * 0.5;

const ImageSlider = (props) => {
  const images = props.images;
  const [active, setActive] = useState<number>(0);

  const onScrollChange = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styled.imageSliderContainer}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styled.imageSliderScroll}
        onScroll={onScrollChange}
      >
        {images.map((i, key) => (
          <Image key={key} source={i} style={styled.imageSliderImage} />
        ))}
      </ScrollView>
      <View style={styled.imageSliderSlider}>
        {images.map((i, key) => (
          <Text
            key={key}
            style={
              key === active
                ? styled.imageSliderIconActive
                : styled.imageSliderIcon
            }
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};
const styled = StyleSheet.create({
  imageSliderContainer: {
    flex: 1,
    width: width,
    height: height,
  },
  imageSliderScroll: {
    marginLeft: 10,
    width: width,
    height: height,
  },
  imageSliderImage: {
    width: width,
    height: height,
    resizeMode:'cover',
  },
  imageSliderSlider: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  imageSliderIcon: {
    fontSize: width / 30,
    padding: 3,
    color: "#888",
  },
  imageSliderIconActive: {
    fontSize: width / 30,
    padding: 3,
    color: "#fff",
  },
});

export default ImageSlider;
