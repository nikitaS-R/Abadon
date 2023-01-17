import { View, Text, StyleSheet } from "react-native";

const Exile = () => {
  return (
    <View style={styled.exileContainer}>
      <Text style={styled.exileText}>Exile</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  exileContainer: {
    flex: 1,
    backgroundColor: "#64262C",
  },
  exileText: {
    fontSize: 24,
    color: "black",
  },
});

export default Exile;
