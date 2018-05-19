import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch, LayoutAnimation } from 'react-router-native'
import Menu from './views/menu';

const Hej = () => (
  <Text>Hej</Text>
);

const Hello = () => (
  <Text>Hello</Text>
);

const Hey = () => (
  <Text>Hey</Text>
);

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>

            <Switch>
              <Route exact path={'/'} component={Hej}/>
              <Route exact path={'/add'} component={Hello}/>
              <Route exact path={'/profile'} component={Hey}/>
            </Switch>
          </View>

          <Menu />
        </View>
      </NativeRouter>
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
  content: {
    width: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
