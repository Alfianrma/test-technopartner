import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {UseSelector} from 'react-redux';
import ModalScanCode from '../components/ModalScanCode';
import UserAPI from '../apiService/UserAPI';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const token = useSelector(state => state.token);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    GetUserData();
  }, []);

  const GetUserData = async () => {
    const res = await UserAPI.GetUserData(token);
    console.log(res.result);
    setUserData(res.result);
  };
  return (
    <View>
      <ModalScanCode show={showModal} onClose={() => setShowModal(false)} />
      <View style={styles.header}>
        <Image
          source={require('../assets/logo_technopartner.png')}
          style={{height: 60, width: 120}}
        />
      </View>
      <View>
        <ImageBackground
          source={require('../assets/motif.png')}
          style={styles.profileSection}>
          <View style={styles.profile}>
            <Text style={styles.greetings}>{userData.Greeting},</Text>
            <Text style={styles.name}>{name}</Text>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => setShowModal(true)}>
                <Image
                  source={require('../assets/qr.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
              <View style={{marginLeft: 30}}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <Text style={{width: '60%', color: 'black', fontSize: 17}}>
                    Saldo
                  </Text>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {userData.saldo}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <Text style={{width: '75%', color: 'black', fontSize: 17}}>
                    Points
                  </Text>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: '#03FC66',
                      fontWeight: 'bold',
                      textAlign: 'right',
                    }}>
                    {userData.point}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  profileSection: {
    height: 220,
    width: 'auto',
    padding: 20,
  },
  profile: {
    display: 'flex',
    backgroundColor: 'white',
    height: 'auto',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  greetings: {
    fontSize: 15,
    fontWeight: '450',
    color: 'black',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  circle: {
    height: 70,
    width: 70,
    borderRadius: 70,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
