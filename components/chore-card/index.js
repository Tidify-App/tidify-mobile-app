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
    flex: 1,
    flexBasis: '33%',
    backgroundColor: '#fff',
    borderColor: 'red'
  },
});