import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UsersScores from '../../components/user/users-scores/index';

const users = [
    {
        image: 'https://gymkhana.iitb.ac.in/~sports/images/profile.png',
        current_score: 300,
        color: '#43DE77'
    },
    {
        image: 'https://gymkhana.iitb.ac.in/~sports/images/profile.png',
        current_score: 250,
        color: '#F55485'
    }
]


export default class ScoreBoard extends React.Component {
  componentDidMount() {
    console.log('location', this.props.location.state)
  }
  render() {
    const maxPoints = users.map(
      user => user.current_score
    ).reduce(
      (prev, cur) => cur > prev ? cur : prev, 0
    )
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tidify</Text>
        <Text style={styles.room}>Jirholm's residence</Text>
        <UsersScores users={users} maxPoints={maxPoints}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontFamily: 'Helvetica Neue',
    color: '#9013FE',
  },
  room: {
    fontSize: 20,
    color: '#999'
  }
});