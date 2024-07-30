import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../colors/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const HeaderComponent = ({
  title,
  bgColor,
  icon,
  icon2,
  iconColor,
  onPressProfile,
  onPressBack,
}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.content}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon2 ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPressBack}
              style={{paddingRight: 20}}>
              <Icon2 name="arrow-back" size={32} color={iconColor} />
            </TouchableOpacity>
          ) : null}
          <Text style={styles.title}>{title}</Text>
        </View>
        {icon ? (
          <TouchableOpacity activeOpacity={0.7} onPress={onPressProfile}>
            <Icon name="user-circle" size={32} color={'white'} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.themeColor,
    height: moderateVerticalScale(50),
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(18),
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(14),
  },
});
