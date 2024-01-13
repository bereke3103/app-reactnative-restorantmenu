import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    // margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
