import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MealsScreen from '../screens/MealsScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Meals'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        labelStyle: { marginBottom: 4 },
      }}
    >
      <BottomTab.Screen
        name='Meals'
        component={MealsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='food-apple' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Shopping List'
        component={ShoppingListNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='format-list-bulleted' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: 0 }} {...props} />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MealsStack = createStackNavigator();

function MealsNavigator() {
  return (
    <MealsStack.Navigator>
      <MealsStack.Screen
        name='MealsScreen'
        component={MealsScreen}
        options={{ headerTitle: 'Meals' }}
      />
    </MealsStack.Navigator>
  );
}

const ShoppingListStack = createStackNavigator();

function ShoppingListNavigator() {
  return (
    <ShoppingListStack.Navigator>
      <ShoppingListStack.Screen
        name='ShoppingListScreen'
        component={ShoppingListScreen}
        options={{ headerTitle: 'Shopping List' }}
      />
    </ShoppingListStack.Navigator>
  );
}
