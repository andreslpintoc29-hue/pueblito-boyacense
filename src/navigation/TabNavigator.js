import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme/theme';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import EventsScreen from '../screens/EventsScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();

const icon = (emoji) => () => <Text style={{ fontSize: 18 }}>{emoji}</Text>;

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Pueblito Boyacense', tabBarLabel: 'Inicio', tabBarIcon: icon('🏠') }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{ title: 'Servicios', tabBarLabel: 'Servicios', tabBarIcon: icon('🛎️') }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{ title: 'Eventos', tabBarLabel: 'Eventos', tabBarIcon: icon('📅') }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ title: 'Galeria', tabBarLabel: 'Galeria', tabBarIcon: icon('🖼️') }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contacto', tabBarLabel: 'Contacto', tabBarIcon: icon('📍') }}
      />
    </Tab.Navigator>
  );
}
