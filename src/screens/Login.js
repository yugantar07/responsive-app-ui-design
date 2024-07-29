import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import TextInputComponent from '../components/TextInputComponent';
import colors from '../colors/colors';
import ButtonComponent from '../components/ButtonComponent';
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const staticUsername = 'Admin123';
  const staticPassword = 'Password123';

  // const validateForm = () => {
  //   let errors = {};

  //   if (!username) errors.username = 'Username is required';
  //   if (!password) errors.password = 'Password is required';

  //   setErrors(errors);

  //   return Object.keys(errors).length === 0;
  // };

  const showToast1 = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid credentials',
      text2: 'Try Again',
      visibilityTime: 2500,
      position: 'bottom',
    });
  };
  const showToast2 = () => {
    Toast.show({
      type: 'success',
      text1: 'Welcome!',
      text2: 'Login Successfully',
      visibilityTime: 2500,
      position: 'bottom',
    });
  };

  const handleSubmit = () => {
    // const isValid = validateForm();

    // if (isValid) {
    if (username === staticUsername && password === staticPassword) {
      console.log('Login Successful');
      navigation.navigate('Tab');
      setUsername('');
      setPassword('');
      // setErrors({});
      showToast2();
    } else {
      console.log('Invalid credentials');
      showToast1();
    }
    // } else {
    //   console.log('Form validation failed');
    // }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://www.acquisition-international.com/wp-content/uploads/2021/01/employee-tracking.jpg',
        }}
        style={styles.img}>
        <Text style={styles.title}>Login</Text>
      </ImageBackground>
      <View style={styles.mainStyle}>
        <View style={{marginBottom: moderateVerticalScale(28)}}>
          <TextInputComponent
            label={'Email'}
            placeholder={'Enter your email'}
            keyboardType="email-address"
            onChangeText={setUsername}
          />
          {/* {errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )} */}
        </View>

        <View>
          <TextInputComponent
            label={'Password'}
            placeholder={'Enter your password'}
            secureTextEntry={isVisible}
            rightIcon={isVisible ? 'eye-off' : 'eye'}
            onPressRight={() => setIsVisible(!isVisible)}
            onChangeText={setPassword}
          />
          {/* {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )} */}
        </View>
        <TouchableOpacity style={styles.forgotView} activeOpacity={0.7}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <ButtonComponent btnText={'Login'} onPress={handleSubmit} />
      </View>

      <View style={styles.footer}>
        <Text>Not a member?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{fontWeight: 'bold'}}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: moderateVerticalScale(40),
    backgroundColor: 'white',
  },
  img: {
    height: moderateVerticalScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: scale(34),
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateVerticalScale(44),
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  forgotText: {
    color: colors.themeColor,
    fontWeight: '600',
    fontSize: scale(14),
  },
  footer: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(72),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
