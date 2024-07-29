// ProfileScreen.js

import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
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
          <Text style={styles.statNumber}>225</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>228</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.contactItem}>
          <Icon name="email" type="material" color="#517fa4" />
          <Text style={styles.contactText}>tekchettri@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="phone" type="material" color="#517fa4" />
          <Text style={styles.contactText}>+222 202 202</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="group" type="material" color="#517fa4" />
          <Text style={styles.contactText}>Add to Group</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="comment" type="material" color="#517fa4" />
          <Text style={styles.contactText}>Show All Comments</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  contact: {
    width: '100%',
    paddingHorizontal: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: '#00aced',
    width: '80%',
    marginVertical: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
