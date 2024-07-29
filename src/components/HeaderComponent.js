import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../colors/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderComponent = ({title, icon, onPressProfile}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
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
    backgroundColor: colors.themeColor,
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
