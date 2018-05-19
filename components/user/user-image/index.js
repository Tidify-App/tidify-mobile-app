import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class UserImage extends React.Component {
  render() {
    const { source } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 64,
            height: 64,
            borderRadius: 32
          }}
          source={source}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
  }
});