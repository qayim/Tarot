import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './pages/MainScreen';
import CardScreen from './pages/CardScreen';
import FortuneScreen from './pages/FortuneScreen';
import { StatusBar } from "react-native";
import FavoritesContextProvider from "./store/context/context-file";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Card" component={CardScreen} />
            <Stack.Screen name="Fortune" component={FortuneScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

