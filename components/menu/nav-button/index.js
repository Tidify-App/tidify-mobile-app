import React, {PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link, withRouter } from 'react-router-native';

class NavButton extends PureComponent {
  render() {
    const { to, title, icon, location } = this.props;
    const active = location.pathname === to;
    return (
      <View>
        <Link to={to} underlayColor='#9013FE50'>
          <Text
            style={active ? styles.textActive : styles.textInactive}
          >{title}
          </Text>
        </Link>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInactive: {
    color: '#BBB',
  },
  textActive: {
    color: '#9013FE'
  }
});

export default withRouter(NavButton);