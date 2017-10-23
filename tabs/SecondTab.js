import React from 'react';
import { Text, View, Button, Image } from 'react-native';

export default class SecondTab extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'SecondTab',
    tabBarIcon: ({tintColor}) => (
      <Image
      source={require('../images/shopping.png')}
      style={{width: 22, height: 22, tintColor: 'white'}}>
      </Image>
    )
  };

  render() {
    return <View style={
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <Text style={{fontSize: 30}}>
        This is Tab 2
      </Text>
  </View>
  }
}
