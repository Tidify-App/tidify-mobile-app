import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class PointsBar extends React.Component {
  render() {
    const { maxPoints, points, color } = this.props;
    return (
      <View style={styles.container}>
        <View style={{
            width: points/maxPoints*100 + '%',
            height: 30,
            backgroundColor: color,
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'center',
        }}>
          <Text style={styles.score}>{points}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: 20,
  },
  score: {
    color: '#FEFEFE',
    textAlign: 'right',
    marginRight: 15,
  }
});