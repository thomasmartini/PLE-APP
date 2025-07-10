import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from './src/modules/Account/Account';
import Home from './src/modules/Home/Home';
import MapScreen from './src/modules/Live/Live';
import Search from './src/modules/Search/Search';
import Info from './src/modules/Info/Info';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const navTheme = DefaultTheme
navTheme.colors.background = '#c5eceb'

 function HomeTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="Routes"  component={Search} />
      <Stack.Screen name="Reis Informatie" component={Info} />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Reis"
        component={HomeTabs}
        options={{
          headerShown: false ,
          tabBarLabel: 'Reis Plannen',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Kaart" component={MapScreen} options={{
         headerShown: false ,
          tabBarLabel: 'Kaart',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="map" size={size} color={color} />;
          },
        }}
       />
    </Tab.Navigator>
  );
}

export default function App({route, navigation}) {
    return(
  <NavigationContainer>
    <RootStack/>
  </NavigationContainer>
    )
    
}

