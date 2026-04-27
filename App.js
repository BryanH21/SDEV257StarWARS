import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AndroidNavigator from './navigation/AndroidNavigator';
import IOSNavigator from './navigation/IOSNavigator';

export default function App() {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });
        return () => unsubscribe();
    }, []);

    if (!isConnected) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>No Internet Connection</Text>
                <Text style={{ fontSize: 16, textAlign: 'center', color: 'gray' }}>
                    Please check your network settings and try again.
                </Text>
            </View>
        );
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                {Platform.OS === 'ios' ? <IOSNavigator /> : <AndroidNavigator />}
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}