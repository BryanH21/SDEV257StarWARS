import { createDrawerNavigator } from '@react-navigation/drawer';
import FilmsScreen from '../screens/FilmsScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import SpaceshipsScreen from '../screens/SpaceshipsScreen';

const Drawer = createDrawerNavigator();

export default function AndroidNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Planets" component={PlanetsScreen} />
            <Drawer.Screen name="Films" component={FilmsScreen} />
            <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
        </Drawer.Navigator>
    );
}