import { TouchableOpacity, View, Image, StyleSheet } from "react-native";

const ReturnContainer = (props) => {
  const { children } = props;

  return (
    <View style={styled.returnContainer}>
      <View style={styled.returnButton}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            style={styled.returnImage}
            source={require("../../assets/images/return.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styled.returnChilder}>{children}</View>
    </View>
  );
};
const styled = StyleSheet.create({
  returnContainer: {
    flex: 1,
  },
  returnButton: {
    backgroundColor: "#64262C",
    paddingTop:10,
    paddingLeft:10
  },
  returnImage: {
    width: 20,
    height: 20,
  },
  returnChilder: {
    flex: 1,
  },
});

export default ReturnContainer;
