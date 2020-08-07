import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: styles.main,
        tabStyle: styles.tabStyle,
        iconStyle: styles.iconStyle,
        labelStyle: styles.labelStyle,
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size} color={focused ? '#8257e5' : color}
            />
          )
        }}  
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size} color={focused ? '#8257e5' : color}
            />
          ) 
        }}  
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    elevation: 0,
    shadowOpacity: 0,
    height: 64,
  },
  tabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    flex: 0,
    height: 20,
    width: 20,
  },
  labelStyle: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 13,
    marginLeft: 16,
  }
})

export default StudyTabs;