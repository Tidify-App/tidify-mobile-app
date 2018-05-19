import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserImage from '../user-image/index';
import PointsBar from '../points-bar/index';

export default class UserDisplay extends React.Component {
  render() {
    const { user, maxPoints } = this.props;
    return (
      <View style={styles.container}>
        <UserImage source={user.image} />
        <PointsBar
          maxPoints={maxPoints}
          points={user.current_score}
          color={user.color}
        />
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
    flexDirection: 'row',
    height: 90,
  },
});