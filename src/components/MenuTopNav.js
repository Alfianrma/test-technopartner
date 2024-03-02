import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SeasonalMenu from '../screen/SeasonalMenu';
import BestSellerMenu from '../screen/BestSellerMenu';
import CoffeMenu from '../screen/CoffeMenu';
const Tab = createMaterialTopTabNavigator();

const MenuTopNav = () => {
  function MyTabBar({state, descriptors, navigation, position}) {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          backgroundColor: 'white',
          justifyContent: 'space-between',
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
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: isFocused ? '#black' : '#D8D8D8',
                  fontWeight: '500',
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Seasonal" component={SeasonalMenu} />
      <Tab.Screen name="Best Seller" component={BestSellerMenu} />
      <Tab.Screen name="Coffee" component={CoffeMenu} />
    </Tab.Navigator>
  );
};

export default MenuTopNav;

const styles = StyleSheet.create({});
