import React, {PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default class Menu extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Link to={'/'} >
          <Text>Go to Board</Text>
        </Link>
        <Link to={'/add'}>
          <Text>Add Chore</Text>
        </Link>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#9013FE',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
});
