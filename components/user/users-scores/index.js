import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserDisplay from '../user-display/index';


export default class UsersScores extends React.Component {
  render() {
    const { maxPoints, users } = this.props;
    const userList = users.map(
        (user, index) => <UserDisplay key={index} user={user} maxPoints={maxPoints} />
    );
    return (
      <View style={styles.container}>
        {userList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});