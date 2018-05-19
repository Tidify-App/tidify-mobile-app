import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UsersScores from '../../components/user/users-scores/index';

const users = [
    {
        image: require('../../assets/user-images/anton.jpg'),
        current_score: 300,
        color: '#43DE77'
    },
    {
        image: require('../../assets/user-images/sara.jpg'),
        current_score: 250,
        color: '#F55485'
    }
]

// const postChore = (chore) => {
//   fetch('/activities?sessionid=1', )
// }

const postChore = (chore) => {
  const data = {
    activity: {
      user_id: 1,
        task: {
          name: chore.name,
            codename: chore.name,
            points: chore.value
       }
    }
  };

  fetch('http://192.168.1.137:3000/activities?sessionid=1', {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data),
    method: 'POST'
  })
  .then(response => response.json()) // JSON from `response.json()` call
  .then(response => console.log('response', response));
};

// function postData(url, data) {
//   return fetch(url, {
//     header: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(data),
//     method: 'POST'
//   })
// };

export default class ScoreBoard extends React.Component {
  componentDidMount() {
    if(this.props.location.state) {
      postChore(this.props.location.state)
    }
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