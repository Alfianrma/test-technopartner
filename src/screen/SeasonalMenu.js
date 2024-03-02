import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const SeasonalMenu = () => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Seasonal Product</Text>
        </View>
        <View style={styles.menuContainer}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <Image source={require('../assets/photo.png')} />
            <View style={{width: 220}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                Raisin Delight Coffe
              </Text>
              <Text style={{textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae pellentesque tortor.
              </Text>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 20,
                fontSize: 17,
              }}>
              50.000
            </Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Best Sellers</Text>
        </View>
        <View style={styles.menuContainer}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <Image source={require('../assets/photo.png')} />
            <View style={{width: 220}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                Raisin Delight Coffe
              </Text>
              <Text style={{textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae pellentesque tortor.
              </Text>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 20,
                fontSize: 17,
              }}>
              50.000
            </Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Coffee</Text>
        </View>
        <View style={styles.menuContainer}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <Image source={require('../assets/photo.png')} />
            <View style={{width: 220}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                Raisin Delight Coffe
              </Text>
              <Text style={{textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae pellentesque tortor.
              </Text>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 20,
                fontSize: 17,
              }}>
              50.000
            </Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Cold Brew</Text>
        </View>
        <View style={styles.menuContainer}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <Image source={require('../assets/photo.png')} />
            <View style={{width: 220}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                Raisin Delight Coffe
              </Text>
              <Text style={{textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae pellentesque tortor.
              </Text>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 20,
                fontSize: 17,
              }}>
              50.000
            </Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Chocolate</Text>
        </View>
        <View style={styles.menuContainer}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <Image source={require('../assets/photo.png')} />
            <View style={{width: 220}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
                Raisin Delight Coffe
              </Text>
              <Text style={{textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae pellentesque tortor.
              </Text>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 20,
                fontSize: 17,
              }}>
              50.000
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SeasonalMenu;

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#F2F2F2',
    padding: 15,
  },
  titleText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
});
