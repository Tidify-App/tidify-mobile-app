import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class UserImage extends React.Component {
  render() {
    const { source } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: source}}
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
    borderRadius: '50%'
  },
});