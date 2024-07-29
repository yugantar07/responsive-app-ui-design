import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderComponent title={'About Us'} />
      <Text style={styles.paragraph}>
        Welcome to our application! We are dedicated to bringing you the best
        user experience possible. Our app is designed to provide you with
        comprehensive information and tools to enhance your experience.
      </Text>
      <Text style={styles.paragraph}>
        Our team is passionate about creating innovative solutions and
        continuously improving our app. We value your feedback and are committed
        to addressing any issues or suggestions you may have.
      </Text>
      <Text style={styles.paragraph}>Thank you for using our app!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  paragraph: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default About;
