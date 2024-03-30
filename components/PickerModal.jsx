import React, { useState } from "react";
import { Modal, Button, View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerModal = ({ text = "", options }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={{ marginTop: 22 }}>
      <Button title={text} onPress={() => setModalVisible(true)} />

      <Modal
        collapsable
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 200, width: 300 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedValue(itemValue);
              }}
            >
              {options?.map(({ id, lesson }) => (
                <Picker.Item key={id} label={lesson} value={id} />
              ))}
            </Picker>
            <Button title="Done" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PickerModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    marginTop: 200,
    marginHorizontal:40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%", // Puedes ajustar esto según necesites
  },
});
