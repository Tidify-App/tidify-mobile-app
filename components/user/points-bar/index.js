import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class PointsBar extends React.Component {
  render() {
    const { maxPoints, points, color } = this.props;
    return (
      <View style={styles.container}>
        <View style={{
            width: points/maxPoints*100 + '%',
            backgroundColor: color,
            borderRadius: '50%'
        }}>
          <Text>{points}</Text>
        </View>
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