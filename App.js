import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './pages/MainScreen';
import CardScreen from './pages/CardScreen';
import FortuneScreen from './pages/FortuneScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Card" component={CardScreen} />
          <Stack.Screen name="Fortune" component={FortuneScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

