import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const ModalScanCode = ({show, onClose}) => {
  return (
    <Modal visible={show} transparent={true}>
      <View style={styles.screen}>
        <TouchableOpacity onPress={onClose}>
          <Image
            source={require('../assets/ic_close.png')}
            style={{end: 1, position: 'absolute'}}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              alignSelf: 'center',
              marginBottom: 15,
            }}>
            Show the QR Code below to the cashier
          </Text>
          <Image
            source={require('../assets/qr.png')}
            style={{width: 200, height: 200, alignSelf: 'center'}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalScanCode;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});
