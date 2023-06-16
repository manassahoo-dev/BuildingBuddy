import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Button from './src/components/atoms/Button';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const UserItem = ({user}) => {
  const handleButtonPress = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.flatNumber}>{user.flatNumber}</Text>
      <Text style={styles.username}>{user.fullName}</Text>
      <Text>{user.mobile}</Text>
      <Button
        onPress={handleButtonPress}
        title="Primary Button"
        variation="primary"
      />
      <Button
        onPress={handleButtonPress}
        title="Secondary Button"
        variation="secondary"
      />
      <Button
        onPress={handleButtonPress}
        title="Outlined Button"
        variation="outlined"
      />
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const users = [
    {flatNumber: '101', fullName: 'Radha Krishna', mobile: 1510936378},
    {
      flatNumber: '102',
      fullName: 'KuppuRaj Chinna Swamy',
      mobile: 8884141141,
    },
    {flatNumber: '103', fullName: 'Nagesh', mobile: 9550664454},
    {flatNumber: '104', fullName: 'Vishnu', mobile: 9739142699},

    {
      id: 3,
      flatNumber: '201',
      fullName: 'Pesala Prasad Reddy',
      mobile: 9949026877,
    },
    {flatNumber: '202', fullName: 'Manas Sahoo', mobile: 8523874754},
    {flatNumber: '203', fullName: 'Ashish Gupta', mobile: 9999986897},
    {flatNumber: '204', fullName: 'Chiranjeevi', mobile: 9542472200},

    {flatNumber: '301', fullName: 'Ramana', mobile: 8971576789},
    {flatNumber: '302', fullName: 'Manoj', mobile: 9032401648},
    {flatNumber: '303', fullName: 'Vivek', mobile: 9650690169},
    {flatNumber: '304', fullName: 'Dilleep', mobile: 7846914999},

    {
      id: 3,
      flatNumber: '401',
      fullName: 'Harish Kathuroju',
      mobile: 9010445500,
    },
    {flatNumber: '402', fullName: 'Naresh', mobile: 8019141341},
    {
      id: 3,
      flatNumber: '403',
      fullName: 'Venkateshwara  Reddy',
      mobile: 9949026878,
    },
    {flatNumber: '404', fullName: 'Rajesh', mobile: 7406222003},

    {flatNumber: '501', fullName: 'Kishan', mobile: 9676825800},
    {flatNumber: '502', fullName: 'Mahesh Narayan', mobile: 9676126147},
    {flatNumber: '503', fullName: 'Narashima Reddy', mobile: 9948121323},
    {flatNumber: '504', fullName: 'Sampath', mobile: 9642052023},

    // Add more user data as needed
  ];

  return (
    <ScrollView>
      {users.map(user => (
        <UserItem key={user.mobile} user={user} />
      ))}
    </ScrollView>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return (
    <>
      <Text>Manas Sahoo</Text>
    </>
  );
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
