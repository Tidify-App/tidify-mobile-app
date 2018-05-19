import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class ChoreCard extends PureComponent {
  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <Image
          source={this.props.image}
          style={{height: 42, maxWidth: 42, marginBottom: 8}} />
        <Text style={styles.choreName}>{this.props.name}</Text>
        <Text style={styles.points}>{this.props.value} points</Text>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
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