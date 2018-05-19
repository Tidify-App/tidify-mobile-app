import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ChoreCard extends PureComponent {
  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <Text style={styles.choreName}>{this.props.name}</Text>
        <Text style={styles.points}>{this.props.value} points</Text>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 4,
    width: 108,
    height: 108,
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.2
  },
  choreName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  points: {
    color: '#999',
    textAlign: 'center',
  },
});