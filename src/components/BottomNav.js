import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Menu from '../screen/Menu';
import MenuTopNav from './MenuTopNav';

const Tab = createBottomTabNavigator();

function MyNavbar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        shadowOpacity: 10,
        elevation: 5,
        height: 70,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = label => {
          switch (label) {
            case 'Home':
              return require('../assets/home2.png');

            case 'Menu':
              return require('../assets/menu2.png');
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              height: 82,
              justifyContent: 'center',
            }}>
            <Image
              source={getIcon(label)}
              style={{
                tintColor: isFocused ? '#949494' : '#D8D8D8',
                marginBottom: 10,
                width: 20,
                height: 20,
              }}
            />
            <Text style={{color: isFocused ? '#949494' : '#D8D8D8'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyNavbar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={MenuTopNav} />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
