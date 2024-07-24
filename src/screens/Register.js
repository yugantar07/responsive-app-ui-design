import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import {useState} from 'react';
import colors from '../colors/colors';
import BackButton from '../components/BackButton';

const Register = ({navigation}) => {
  const [isVisible, setIsVisble] = useState(true);
  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.nameInput}>
          <TextInputComponent
            label={'First Name'}
            inputStyle={{width: '45%'}}
          />
          <TextInputComponent label={'Last Name'} inputStyle={{width: '45%'}} />
        </View>
        <View style={{marginTop: moderateVerticalScale(40)}}>
          <TextInputComponent
            label={'Username'}
            placeholder={'Choose a username'}
          />
        </View>
        <View style={{marginTop: moderateVerticalScale(40)}}>
          <TextInputComponent
            label={'Email'}
            placeholder={'Enter your email'}
          />
        </View>
        <View style={{marginTop: moderateVerticalScale(40)}}>
          <TextInputComponent
            label={'Password'}
            placeholder={'Enter your password'}
            secureTextEntry={isVisible}
            rightIcon={isVisible ? 'eye-off' : 'eye'}
            onPressRight={() => setIsVisble(!isVisible)}
          />
        </View>
        <View style={{marginTop: moderateVerticalScale(40)}}>
          <ButtonComponent btnText={'Sign up'} />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateVerticalScale(24),
    // backgroundColor: 'white',
  },
  title: {
    fontSize: scale(34),
    fontWeight: 'bold',
  },
  nameInput: {
    marginTop: moderateVerticalScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
