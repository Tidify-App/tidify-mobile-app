import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChoreCard extends PureComponent {
  render() {
    return(
      <View style={styles.card}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.value} points</Text>
      </View>
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