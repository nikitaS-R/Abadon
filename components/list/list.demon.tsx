import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import ImageSlider from "../containers/imageSlider";
import ReturnContainer from "../containers/returnContainer";
import { NewsType } from "./list.type";

const ListDemon = (props) => {
  const selectedDemon: NewsType = props.route.params.selectedDemon;
  return (
    <ReturnContainer navigation={props.navigation}>
      <View style={styled.demonContainer}>
        <View style={styled.demonImages}>
          <View style={styled.demonTitle}>
            <Text style={styled.demonTitleText}>{selectedDemon.title}</Text>
          </View>
          <View style={styled.demonSlider}>
            <ImageSlider images={selectedDemon.images}/>
          </View>
        </View>
        <View style={styled.demonScroll}>
          <ScrollView>
            <Text style={styled.demonDescriptionText}>
              {selectedDemon.description}
            </Text>
          </ScrollView>
        </View>
      </View>
    </ReturnContainer>
  );
};
const styled = StyleSheet.create({
  demonContainer: {
    width: "100%",
    height: "90%",
    flex: 1,
    backgroundColor: "#64262C",
  },
  demonImages: {
    flex: 1,
    justifyContent: "center",
  },
  demonTitle: {
    flex: 1,
    alignItems: "center",
  },
  demonTitleText: {
    fontFamily: "RalewayHeader",
    color: "#f0c4a8",
    fontSize: 24,
  },
  demonSlider: {
    flex: 5,
  },
  demonScroll: {
    flex: 2,
    borderTopColor:'gray',
    borderTopWidth:2,
    margin:10
  },
  demonDescriptionText: {
    fontFamily: "RalewayText",
    color: "#f0c4a8",
    fontSize: 18,
    textAlign: "justify",
  },
});

export default ListDemon;
