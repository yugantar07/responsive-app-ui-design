import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const EmployeeDetailsScreen = ({route}) => {
  const {employee} = route.params;

  if (!employee) {
    return (
      <View style={styles.container}>
        <Text>No employee data found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={employee.img} style={styles.image} />
        <Text style={styles.name}>{employee.employeeName}</Text>
        <Text style={styles.designation}>{employee.designation}</Text>
      </View>
    </ScrollView>
  );
};

export default EmployeeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: moderateScale(16),
  },
  header: {
    alignItems: 'center',
    marginBottom: moderateVerticalScale(20),
  },
  image: {
    width: moderateScale(120),
    height: moderateVerticalScale(120),
    borderRadius: moderateScale(60),
    marginBottom: moderateVerticalScale(10),
  },
  name: {
    fontSize: scale(22),
    fontWeight: 'bold',
    marginBottom: moderateVerticalScale(5),
  },
  designation: {
    fontSize: scale(18),
    color: '#888',
  },
});
