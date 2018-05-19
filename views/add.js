import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'react-router-native'
import ChoreCard from '../components/chore-card/index';
import Searchbar from '../components/searchbar';

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
  constructor(props) {
    super(props);

    this.state = {
      shouldGoToLeaderBoard: false,
      choreToAdd: {}
    }
  };
  renderRecentlyLoggedChores() {
    return (
      chores
      .filter((chore) => chore.recentlyLogged)
      .map((chore) => (
        <ChoreCard onPress={() => this.handleOnPress(chore)} style={styles.child} key={chore.name} {...chore}/>
      ))
    );
  };

  renderAllChores() {
    return (
      chores.map((chore) => (
        <ChoreCard onPress={() => this.handleOnPress(chore)} style={styles.child} key={chore.name} {...chore}/>
      ))
    );
  }

  handleOnPress = (choreToAdd) => {
    this.setState({
      shouldGoToLeaderBoard: true,
      choreToAdd: choreToAdd,
    });
  }

  render() {
    if (this.state.shouldGoToLeaderBoard) {
      return <Redirect push exact to={{
        pathname: "/",
        state: this.state.choreToAdd
      }} />
    } else {
      return (
        <View style={styles.container}>
          <Searchbar />
          <Text style={styles.title}>{'Recently logged'.toUpperCase()}</Text>
          { this.renderRecentlyLoggedChores() }
          <Text style={styles.title}>{'Chores'.toUpperCase()}</Text>
          { this.renderAllChores() }
        </View>
      )
    }


  };
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 12,
    paddingRight: 12,
  },
  child: {
    flex: 1,
    flexBasis: '25%',
    flexGrow: 0,
  },
  title: {
    width: '100%',
    margin: 5,
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  }
});