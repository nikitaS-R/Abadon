import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import Exile from "../exile/exile.main";
import Home from "../home/Home.main";
import List from "../list/list.main";
import HomeSvg from "../assets/svg/HomeSvg";
import ExileSvg from "../assets/svg/ExileSvg";
import ListSvg from "../assets/svg/ListSvg";
import { useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListDemon from "../list/list.demon";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<any>();
  const [isSound, setIsSound] = useState<boolean>(true);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={() => {
        const c: string = navigationRef.getCurrentRoute().name;
        c === "Home" ? setIsSound(true) : setIsSound(false);
      }}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#AF3E3E",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 65,
            backgroundColor: "#501E23",
            borderTopColor: "#501E23",
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => <HomeSvg color={color} />,
          }}
        >
          {() => <Home isSound={isSound} />}
        </Tab.Screen>
        <Tab.Screen
          name="Exile"
          component={Exile}
          options={{
            tabBarIcon: ({ color, size }) => <ExileSvg color={color} />,
          }}
        />
        <Tab.Screen
          name="ListDemon"
          component={StackNavigator}
          options={{
            tabBarLabel: "Demons",
            tabBarIcon: ({ color, size }) => <ListSvg color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Demon" component={ListDemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
