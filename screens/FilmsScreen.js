import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function FilmsScreen() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
            .then(response => response.json())
            .then(data => setFilms(data.results));
    }, []);

    return (
        <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Films</Text>
            <FlatList
                data={films}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <Text style={{ padding: 10, fontSize: 16, borderBottomWidth: 1 }}>
                        {item.title}
                    </Text>
                )}
            />
        </View>
    );
}