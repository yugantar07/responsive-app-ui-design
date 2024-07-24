import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../colors/colors';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const BackButton = ({onPress = () => {}}) => {
  return (
    <View style={{width: '10%', backgroundColor: 'transparent'}}>
      <TouchableOpacity
        onPress={onPress}
        style={{marginLeft: moderateScale(10)}}>
        <Icon name="arrow-back" size={34} color={colors.blackOpacity50} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
