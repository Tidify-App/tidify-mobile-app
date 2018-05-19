import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoreCard from '../components/chore-card/index';

const chores = [
  {
    name: 'sweeping',
    value: 75,
    recentlyLogged: true
  },
  {
    name: 'vacuuming',
    value: 50,
    recentlyLogged: false
  },
  {
    name: 'dishwasher',
    value: 30,
    recentlyLogged: false
  },
  {
    name: 'laundry',
    value: 65,
    recentlyLogged: false
  }
]

export default class AddChoreView extends Component {
  render() {
    return(
      <View style={styles.container}>
        {chores.map((chore) => (
          <ChoreCard key={chore.name} {...chore}/>
        ))}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});