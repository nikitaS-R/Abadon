import { View, Text, StyleSheet, Image } from "react-native";
import { NewsType } from "./list.type";

const ListItem = (props) => {
  const currentItem: NewsType = props.news;

  const getTextDescroption = (text: string): string => {
    if (text.length > 165) return text.substring(0, 170) + " ...";
    return text;
  };

  return (
    <View style={styled.listItemContainer}>
      <View style={styled.listItemImage}>
        <Image style={styled.itemImage} source={currentItem.imageName} />
      </View>
      <View style={styled.listText}>
        <View style={styled.boxTitle}>
          <Text style={styled.title}>{currentItem.title}</Text>
        </View>
        <View style={styled.boxDescription}>
          <Text style={styled.description}>
            {getTextDescroption(currentItem.description)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  listItemContainer: {
    borderWidth: 1,
    borderColor: "#fffafa",
    borderRadius: 17,
    height: 150,
    margin: 10,
    flexDirection: "row",
  },
  listItemImage: {
    width: "35%",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  listText: {
    width: "65%",
    padding: 5,
    flex: 1,
  },
  boxTitle: {
    flex: 1,
  },
  boxDescription: {
    flex:4,
  },
  title: {
    fontFamily: "RalewayHeader",
    color: "#f0c4a8",
    fontSize: 18,
  },
  description: {
    fontFamily: "RalewayText",
    color: "#f0c4a8",
    fontSize: 14,
    textAlign: "justify",
  },
});

export default ListItem;
