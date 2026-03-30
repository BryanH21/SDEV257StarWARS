import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FilmsScreen from '../screens/FilmsScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import SpaceshipsScreen from '../screens/SpaceshipsScreen';

const Tab = createBottomTabNavigator();

export default function IOSNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Planets" component={PlanetsScreen} />
            <Tab.Screen name="Films" component={FilmsScreen} />
            <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
        </Tab.Navigator>
    );
}