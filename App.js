import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import MapView from 'react-native-maps'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Modal 
        animationType="slide"
        transparent={true}
        visible={false}
      >
        <View style={styles.center} >
          <View style={styles.modalView}>
            <Text>:)</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, 
      height: 3
    }
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
