import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch, LayoutAnimation } from 'react-router-native'
import Menu from './views/menu';
import AddChoreView from './views/add';

const Hej = () => (
  <Text>Hej</Text>
);

const Hello = () => (
  <Text>Hello</Text>
);

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.content}>
            <Switch>
              <Route exact path={'/'} component={Hej}/>
              <Route exact path={'/add'} component={AddChoreView}/>
              <Route exact path={'/profile'} component={Hello}/>
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
