import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from './src/modules/Account/Account';
import Home from './src/modules/Home/Home';
import MapScreen from './src/modules/Live/Live';
import Search from './src/modules/Search/Search';
import Info from './src/modules/Info/Info';
import Bewaard from './src/modules/Bewaard/Bewaard';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function VertrekNavigator(){
    return(
    <NavigationContainer independent = {true}>
    <Stack.Navigator>
    <Stack.Screen name = "Vertrektijden" component = {Search}/>
    <Stack.Screen name = "15:07 -> 16:06" component = {Info}/>
</Stack.Navigator>
</NavigationContainer>
    )
}
export default function App() {
    
    return (   
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Plannen" component={Home}   options={{
          tabBarLabel: 'Plannen',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }} />
                <Tab.Screen name="Vertrektijden" component={VertrekNavigator} options={{
          tabBarLabel: 'Vertrektijden',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="clock" size={size} color={color} />;
          },
        }}/>
                <Tab.Screen name="Kaart" component={MapScreen} options={{
          tabBarLabel: 'Kaart',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="map" size={size} color={color} />;
          },
        }} />
                <Tab.Screen name="Bewaard" component={Bewaard} options={{
          tabBarLabel: 'Bewaard',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="memory" size={size} color={color} />;
          },
        }} />
                <Tab.Screen name="Meer" component={Account} options={{
          tabBarLabel: 'Meer',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}/>
            </Tab.Navigator>
        
        </NavigationContainer>

    );
}

