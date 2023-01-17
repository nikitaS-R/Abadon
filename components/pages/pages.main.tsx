import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Home from "../home/Home.main";
import Loader from "../loader/loader.main";
import TabNavigator from "../navigator/tabNavigator";

const PageController = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   setTimeout(() => setLoading((prev) => !prev), 3000);
  // }, []);
  return (
    <View style={styles.container}>
      {loading ? <Loader /> : <TabNavigator />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PageController;
