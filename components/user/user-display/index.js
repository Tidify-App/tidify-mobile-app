import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserImage } from '../user-image/index';
import { PointsBar } from '../points-bar/index';

export default class UserDisplay extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <UserImage source={user.image} />
        <PointsBar
          maxPoints={400}
          points={user.current_score}
          color={user.color}
        />
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