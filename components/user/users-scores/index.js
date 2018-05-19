import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserDisplay } from '../user-display/index';

const users = [
    {
        image: '',
        current_score: 300,
        color: 'green'
    },
    {
        image: '',
        current_score: 250,
        color: 'blue'
    }
]


export default class PointsBar extends React.Component {
  render() {
    const { maxPoints, points, color } = this.props;
    const userList = users.map(user => <UserDisplay user={user} />);
    return (
      <View style={styles.container}>
        {userList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});