import React from "react";
import PageController from "./components/pages/pages.main";
import { Provider } from "react-redux";
import store from "./components/redux";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";

export default function App() {
  const [loader] = useFonts({
    BeastText: require("./assets/fonts/BeastOfRage-BlA3.ttf"),
    RalewayText: require("./assets/fonts/Raleway-Light.ttf"),
    RalewayHeader: require("./assets/fonts/Raleway-Medium.ttf"),
  });
  if (!loader) {
    return;
  }
  return (
    <Provider store={store}>
      <PageController />
      <StatusBar />
    </Provider>
  );
}
