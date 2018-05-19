import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import NavButton from '../components/menu/nav-button'
import scoreIcon from '../assets/pngs/scores.png';
import addButton from '../assets/pngs/add-button.png';
import profileIcon from '../assets/pngs/profile.png';

export default class Menu extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <NavButton to={'/'} title='Scores' icon={scoreIcon}/>
        <NavButton to={'/add'} icon={addButton}/>
        <NavButton to={'/profile'} title='Profile' icon={profileIcon}/>
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
