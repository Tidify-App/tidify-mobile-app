import React, { PureComponent } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Searchbar extends PureComponent {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.searchInput}>
          <TextInput placeholder='Sweeping, vacuuming, dusting…'/>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    height: 30,
    borderRadius: 5,
    backgroundColor: '#ECE9E9',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});