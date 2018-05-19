import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ChoreCard extends PureComponent {
  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.value} points</Text>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    margin: 7,
    width: 107,
    height: 107,
  },
});