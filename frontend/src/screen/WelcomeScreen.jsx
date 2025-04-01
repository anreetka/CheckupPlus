import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const logout = async () => {
    try {
      await auth().signOut();
      Alert.alert('Success', 'You have successfully logged out!');
      navigation.navigate('HOME');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to log out.');
    }
  };

  return (
    <View>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
