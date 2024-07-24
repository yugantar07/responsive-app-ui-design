import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../colors/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const ButtonComponent = ({btnText, btnStyles = {}, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.btnStyles, ...btnStyles}}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btnStyles: {
    backgroundColor: colors.themeColor,
    height: moderateVerticalScale(48),
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
});
