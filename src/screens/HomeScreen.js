import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../colors/colors';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = ({navigation}) => {
  const employees = [
    {
      id: 1,
      employeeName: 'Ram',
      img: require('../assets/user.png'),
      designation: 'Junior App Developer',
    },
    {
      id: 2,
      employeeName: 'Hari',
      img: require('../assets/user.png'),
      designation: 'Senior App Developer',
    },
    {
      id: 3,
      employeeName: 'Sita',
      img: require('../assets/user.png'),
      designation: 'Junior App Developer',
    },
    {
      id: 4,
      employeeName: 'Gita',
      img: require('../assets/user.png'),
      designation: 'Senior App Developer',
    },
    {
      id: 5,
      employeeName: 'Shyam',
      img: require('../assets/user.png'),
      designation: 'Senior App Developer',
    },
    {
      id: 6,
      employeeName: 'Krishna',
      img: require('../assets/user.png'),
      designation: 'Senior App Developer',
    },
    {
      id: 7,
      employeeName: 'Arjun',
      img: require('../assets/user.png'),
      designation: 'Junior App Developer',
    },
    {
      id: 8,
      employeeName: 'Kushal',
      img: require('../assets/user.png'),
      designation: 'Senior App Developer',
    },
    {
      id: 9,
      employeeName: 'Jeevan',
      img: require('../assets/user.png'),
      designation: 'Junior App Developer',
    },
    {
      id: 10,
      employeeName: 'Kamal',
      img: require('../assets/user.png'),
      designation: 'Intern',
    },
  ];
  const displayedEmployees = employees.slice(0, 6);

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent
        title={'Home'}
        icon
        onPressProfile={() => navigation.navigate('Profile')}
      />
      <View style={styles.content}>
        <Text style={styles.titleText}>Employees</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {displayedEmployees.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                activeOpacity={0.7}>
                <Image source={item.img} style={styles.image} />
                <Text style={styles.cardText}>Name : {item.employeeName}</Text>
                <Text style={styles.cardText}>{item.designation}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Employees', {employees: employees})
            }>
            <Text style={styles.buttonText}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  content: {
    marginHorizontal: moderateScale(14),
    // backgroundColor: 'red',
  },
  titleText: {
    textAlign: 'center',
    marginTop: moderateVerticalScale(16),
    fontSize: scale(18),
    fontWeight: '600',
  },
  cardText: {
    fontSize: scale(16),
    fontWeight: '500',
  },
  image: {
    height: moderateVerticalScale(100),
    width: moderateScale(100),
  },
  card: {
    width: '44%',
    backgroundColor: 'white',
    marginVertical: moderateVerticalScale(10),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: moderateScale(4),
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(10),
    gap: 10,
  },
  buttonContainer: {
    margin: moderateScale(20),
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.themeColor,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateVerticalScale(20),
    borderRadius: moderateScale(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(4),
  },
  buttonText: {
    color: '#fff',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
});
