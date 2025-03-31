import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/font';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LOGIN');
  };

  const handlSignup = () => {
    navigation.navigate('SINGUP');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/banner.png')} style={styles.banner} />
      <Text style={styles.title}>Ouch? We Got You.</Text>
      <Text style={styles.subtitle}>
        We'll tell you if it's a 'Netflix and chill' or a 'doctor and bill'
        situation...
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            {
              backgroundColor: colors.black,
            },
          ]}
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handlSignup}>
          <Text style={styles.signUpButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    width: '120%',
    height: 100,
    marginVertical: 20,
  },
  banner: {
    height: '45%',
    width: '90%',
  },
  title: {
    fontSize: 35,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 10,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.Medium,
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signUpButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
