import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UsersScores from '../../components/user/users-scores/index';

const baseUrl = 'http://172.20.10.2:3000';

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

const addColor = userList => userList.map((user, index) => ({...user, color: users[index].color, image: users[index].image}));

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

  fetch(baseUrl + '/activities?sessionid=1', {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data),
    method: 'POST'
  })
  .then(response => response.json()) // JSON from `response.json()` call
  .then(response => console.log('response', response));
};

function getLeaderboardData() {
  return fetch(baseUrl + '/scoreboard?sessionid=1', {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'GET'
  })
  .then(response => response.json())
  .catch(error => console.log('error', error))  
}

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
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    
    getLeaderboardData().then(
      data => {
        console.log(data)
        if (data !== undefined) {
          this.setState({
            users: data.users
          });
        }
        
  })
    
  }
  componentDidMount() {
    if(this.props.location.state) {
      postChore(this.props.location.state)
    }
  }

  render() {
    let { users } = this.state;
    users = addColor(users);
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