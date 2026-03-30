import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AndroidNavigator from './navigation/AndroidNavigator';
import IOSNavigator from './navigation/IOSNavigator';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                {Platform.OS === 'ios' ? <IOSNavigator /> : <AndroidNavigator />}
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}