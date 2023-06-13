import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {Button, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const UserItem = ({user}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.flatNumber}>{user.flatNumber}</Text>
      <Text style={styles.username}>{user.username}</Text>
      <Text>{user.mobile}</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const users = [
    {flatNumber: '101', username: 'Radha Krishna', mobile: 1510936378},
    {
      flatNumber: '102',
      username: 'KuppuRaj Chinna Swamy',
      mobile: 8884141141,
    },
    {flatNumber: '103', username: 'Nagesh', mobile: 9550664454},
    {flatNumber: '104', username: 'Vishnu', mobile: 9739142699},

    {
      id: 3,
      flatNumber: '201',
      username: 'Pesala Prasad Reddy',
      mobile: 9949026877,
    },
    {flatNumber: '202', username: 'Manas Sahoo', mobile: 8523874754},
    {flatNumber: '203', username: 'Ashish Gupta', mobile: 9999986897},
    {flatNumber: '204', username: 'Chiranjeevi', mobile: 9542472200},

    {flatNumber: '301', username: 'Ramana', mobile: 8971576789},
    {flatNumber: '302', username: 'Manoj', mobile: 9032401648},
    {flatNumber: '303', username: 'Vivek', mobile: 9650690169},
    {flatNumber: '304', username: 'Dilleep', mobile: 7846914999},

    {
      id: 3,
      flatNumber: '401',
      username: 'Harish Kathuroju',
      mobile: 9010445500,
    },
    {flatNumber: '402', username: 'Naresh', mobile: 8019141341},
    {
      id: 3,
      flatNumber: '403',
      username: 'Venkateshwara  Reddy',
      mobile: 9949026878,
    },
    {flatNumber: '404', username: 'Rajesh', mobile: 7406222003},

    {flatNumber: '501', username: 'Kishan', mobile: 9676825800},
    {flatNumber: '502', username: 'Mahesh Narayan', mobile: 9676126147},
    {flatNumber: '503', username: 'Narashima Reddy', mobile: 9948121323},
    {flatNumber: '504', username: 'Sampath', mobile: 9642052023},

    // Add more user data as needed
  ];

  return (
    <View>
      {users.map(user => (
        <UserItem key={user.mobile} user={user} />
      ))}
    </View>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is profile</Text>;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    // justifyContent: 'space-between',
    gap: 10,
    padding: 10,
  },
  flatNumber: {
    // marginRight: 10,
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
    // fontSize: 16,
  },
});

export default App;
