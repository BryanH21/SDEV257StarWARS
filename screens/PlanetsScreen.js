import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function PlanetsScreen() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => setPlanets(data.results));
    }, []);

    return (
        <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Planets</Text>
            <FlatList
                data={planets}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <Text style={{ padding: 10, fontSize: 16, borderBottomWidth: 1 }}>
                        {item.name}
                    </Text>
                )}
            />
        </View>
    );
}