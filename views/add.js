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
        <Text style={styles.title}>Recently logged</Text>
        {chores
        .filter((chore) => chore.recentlyLogged)
        .map((chore) => (
          <ChoreCard style={styles.child} key={chore.name} {...chore}/>
        ))}
        <Text style={styles.title}>Chores</Text>
        {chores.map((chore) => (
          <ChoreCard style={styles.child} key={chore.name} {...chore}/>
        ))}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  child: {
    flex: 1,
    flexBasis: '33%',
    flexGrow: 0,
  },
  title: {
    width: '100%'
  }
});