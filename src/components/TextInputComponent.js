import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../colors/colors';

const TextInputComponent = ({
  rightIcon,
  label,
  placeholder,
  onPressRight,
  onChangeText,
  inputStyle = {},
  ...props
}) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      <Text style={styles.label}>{label}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          placeholder={placeholder}
          style={styles.textInputStyle}
          onChangeText={onChangeText}
          {...props}
        />
        {rightIcon ? (
          <TouchableOpacity onPress={onPressRight}>
            <Icon name={rightIcon} size={24} color={colors.blackOpacity50} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.blackOpacity50,
    borderRadius: moderateScale(4),
  },
  textInputStyle: {
    paddingVertical: moderateVerticalScale(10),
    flex: 1,
    fontSize: scale(16),
  },
  label: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: colors.blackOpacity50,
  },
});
