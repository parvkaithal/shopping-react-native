import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Body extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Image source={require('../images/mob.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.column2}>
          <Image source={require('../images/lapi.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.full}>
          <Image source={require('../images/full-one.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.column3}>
          <Image source={require('../images/mob-one.jpeg')} style={styles.image}/>
          
        </View>
        <View style={styles.column4}>
          <Image source={require('../images/mob-two.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.full}>
          <Image source={require('../images/lapi-two.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.full}>
          <Image source={require('../images/full-three.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.full}>
          <Image source={require('../images/hero.jpeg')} style={styles.image}/>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 3,
    backgroundColor: '#3b5998',
  },
  column1: {
    flex: 1,
    padding: 5,
  },
  column2: {
    flex: 2,
    padding: 5,
  },
  column3: {
    flex: 1,
    padding: 5,
  },
  column4: {
    flex: 1,
    padding: 5,
  },
  full: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
