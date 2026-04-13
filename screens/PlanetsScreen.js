import { useEffect, useState } from 'react';
import { Button, FlatList, Modal, Text, TextInput, View } from 'react-native';

export default function PlanetsScreen() {
    const [planets, setPlanets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => setPlanets(data.results));
    }, []);

    return (
        <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>

            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Planets</Text>

            <TextInput
                style={{ borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5 }}
                placeholder="Enter search term"
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
            />

            <Button title="Search" onPress={() => setModalVisible(true)} />

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 10 }}>
                        <Text style={{ fontSize: 18, marginBottom: 20 }}>You searched for: {searchTerm}</Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

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