import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../colors/colors';

const EmployeesScreen = ({navigation, route}) => {
  const employees = route.params.employees;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeaderComponent
        title={'All Employees'}
        icon2
        iconColor={'white'}
        bgColor={colors.themeColor}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {employees.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('Details', {employee: item})
                }>
                <Image source={item.img} style={styles.image} />
                <Text style={styles.cardText}>Name : {item.employeeName}</Text>
                <Text style={styles.cardText}>{item.designation}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default EmployeesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: moderateScale(14),
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
    gap: moderateScale(10),
  },
});
