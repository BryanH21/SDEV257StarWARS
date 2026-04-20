import { useEffect, useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

export default function SpaceshipsScreen() {
  const [spaceships, setSpaceships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [swipeItem, setSwipeItem] = useState("");
  const [swipeModalVisible, setSwipeModalVisible] = useState(false);

  useEffect(() => {
    fetch("https://swapi.info/api/starships")
      .then((response) => response.json())
      .then((data) => setSpaceships(data));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Spaceships
      </Text>

      <TextInput
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
          borderRadius: 5,
        }}
        placeholder="Enter search term"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />

      <Button title="Search" onPress={() => setModalVisible(true)} />

      {/* Search Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 30, borderRadius: 10 }}
          >
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
              You searched for: {searchTerm}
            </Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Swipe Modal */}
      <Modal
        visible={swipeModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 30, borderRadius: 10 }}
          >
            <Text style={{ fontSize: 18, marginBottom: 20 }}>{swipeItem}</Text>
            <Button title="Close" onPress={() => setSwipeModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <SwipeListView
        data={spaceships}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </View>
        )}
        renderHiddenItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#55BCF6",
              flex: 1,
              justifyContent: "center",
              paddingLeft: 15,
            }}
          >
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
        )}
        leftOpenValue={75}
        onRowOpen={(rowKey, rowMap) => {
          setSwipeItem(rowKey);
          setSwipeModalVisible(true);
        }}
      />
    </View>
  );
}
