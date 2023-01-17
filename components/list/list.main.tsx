import {useState } from "react";
import { View,StyleSheet, FlatList } from "react-native";
import { initialNews } from "./list.constant";
import ListItem from "./list.item";

import { NewsType } from "./list.type";

const List = (props) => {
  const [newsData, setNewsData] = useState<NewsType[]>(initialNews);
  return (
    <View style={styled.listContainer}>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <ListItem news={item} />}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: "90%",
    flex:1,
    backgroundColor: "#64262C",
  }
});

export default List;
