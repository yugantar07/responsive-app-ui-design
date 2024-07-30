import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const ProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={require('../assets/profile.jpg')}
          />
          <Text style={styles.name}>Tek Bahadur Chettri</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.stats}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <View style={styles.contactItem}>
            <Icon
              name="email"
              type="material"
              color="#517fa4"
              size={scale(26)}
            />
            <Text style={styles.contactText}>tekchettri@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon
              name="phone"
              type="material"
              color="#517fa4"
              size={scale(26)}
            />
            <Text style={styles.contactText}>+222 202 202</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon
              name="account-group"
              type="material"
              color="#517fa4"
              size={scale(26)}
            />
            <Text style={styles.contactText}>Add to Group</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon
              name="comment"
              type="material"
              color="#517fa4"
              size={scale(26)}
            />
            <Text style={styles.contactText}>Show All Comments</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  header: {
    marginTop: verticalScale(50),
    alignItems: 'center',
  },
  avatar: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  name: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginVertical: verticalScale(10),
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: verticalScale(20),
  },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: moderateScale(14),
    color: '#888',
  },
  contact: {
    width: '100%',
    paddingHorizontal: moderateScale(20),
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  contactText: {
    marginLeft: scale(10),
    fontSize: moderateScale(16),
  },
  signOutButton: {
    backgroundColor: '#00aced',
    width: '80%',
    marginVertical: verticalScale(20),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
