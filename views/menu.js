import React, {PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import NavButton from '../components/menu/nav-button'

export default class Menu extends PureComponent {
  render() {
    
    return (
      <View style={styles.container}>
        <NavButton to={'/'} title='Scores'/>
        <NavButton to={'/add'} title='Add Chore'/>
        <NavButton to={'/profile'} title='Profile'/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.2
  }
});
