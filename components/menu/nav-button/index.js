import React, {PureComponent} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link, withRouter } from 'react-router-native';

class NavButton extends PureComponent {
  render() {
    const { to, title, icon, location } = this.props;
    const active = location.pathname === to;
    const imageStyleTitle = title === undefined ? withoutTitle : withTitle;
    const imageStyleActive = active && title === undefined ? {transform: [{rotateZ: '45deg'}]} : {transform: [{rotateZ: '0deg'}]};

    return (
      <Link to={to} underlayColor='#9013FE50'>
        <View style={styles.content}>
          <Image source={icon} style={{...imageStyleActive, ...imageStyleTitle}} />
          {
            title === undefined ?
              null :
              <Text
                style={active ? styles.textActive : styles.textInactive}
              >{title}
              </Text>
          }
        </View>
      </Link>
    );
  }
};

const withoutTitle = {
  height: 40,
  width: 40,
}

const withTitle = {
  height: 25,
  width: 23,
  marginBottom: 5
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  textInactive: {
    color: '#BBB',
    fontSize: 12,
  },
  textActive: {
    color: '#9013FE',
    fontSize: 12,
  }
});

export default withRouter(NavButton);