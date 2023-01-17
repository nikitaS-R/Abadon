import { View, Image,ActivityIndicator,StyleSheet  } from "react-native";

const Loader = () => {
  return (
    <View style={styles.loaderMain}>
      <Image style={styles.loaderLogo} source={require('../../assets/images/Logo.png')}/>
      <ActivityIndicator size={'large'} color="#f0c4a8"/>
    </View>
  );
};
const styles = StyleSheet.create({
  loaderMain: {
    flex: 1,
    backgroundColor: "#8b0000",
    alignItems: "center",
    justifyContent: "center",
  },
  loaderLogo:{
    width:200,
    height:200,
    marginBottom:20
  },

});
export default Loader;
