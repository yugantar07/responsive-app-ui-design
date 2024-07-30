import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import HeaderComponent from '../components/HeaderComponent';
import colors from '../colors/colors';

const EmployeeDetailsScreen = ({route, navigation}) => {
  const {employee} = route.params;

  if (!employee) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No employee data found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderComponent icon2 onPressBack={() => navigation.goBack()} />
      <View style={styles.header}>
        <Image source={employee.img} style={styles.image} />
        <Text style={styles.name}>{employee.employeeName}</Text>
        <Text style={styles.designation}>{employee.designation}</Text>
      </View>
      <View style={styles.bioSection}>
        <Text style={styles.sectionTitle}>Biography</Text>
        <Text style={styles.bioText}>
          {employee.bio || 'No bio available.'}
        </Text>
      </View>
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.contactText}>
          Email: {employee.email || 'Not provided'}
        </Text>
        <Text style={styles.contactText}>
          Phone: {employee.phone || 'Not provided'}
        </Text>
      </View>
      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.skillsText}>
          {employee.skills ? employee.skills.join(', ') : 'No skills listed.'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Contacting employee')}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Added to favorites')}>
          <Text style={styles.buttonText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EmployeeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(20),
  },
  header: {
    alignItems: 'center',
    marginBottom: moderateVerticalScale(20),
    padding: moderateScale(10),
  },
  image: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    marginBottom: moderateVerticalScale(10),
  },
  name: {
    fontSize: scale(22),
    fontWeight: 'bold',
    marginBottom: moderateVerticalScale(5),
    textAlign: 'center',
  },
  designation: {
    fontSize: scale(18),
    color: 'grey',
    textAlign: 'center',
  },
  bioSection: {
    marginBottom: moderateVerticalScale(20),
  },
  sectionTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: moderateVerticalScale(10),
  },
  bioText: {
    fontSize: scale(16),
    color: 'black',
  },
  contactSection: {
    marginBottom: moderateVerticalScale(20),
  },
  contactText: {
    fontSize: scale(16),
    color: 'black',
  },
  skillsSection: {
    marginBottom: moderateVerticalScale(20),
  },
  skillsText: {
    fontSize: scale(16),
    color: ' black',
  },
  buttonContainer: {
    marginVertical: moderateVerticalScale(20),
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.themeColor,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(5),
    marginVertical: moderateVerticalScale(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(4),
  },
  buttonText: {
    color: '#fff',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: scale(16),
    color: colors.error,
    textAlign: 'center',
    marginTop: moderateVerticalScale(20),
  },
});
