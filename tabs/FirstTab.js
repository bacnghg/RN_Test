import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class  FirstTab extends React.Component {
  static navigationOptions = {
    tabBarLabel:'Home',
    tabBarIcon: ({tintColor}) => (
      <Image
      source={require('../images/home.png')}
      style={{width: 22, height: 22, tintColor: 'white'}}>
      </Image>
    )
  }
  render(){
    return <View style={
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
        <Text style = {{fontSize: 30}}>
          This is tab 1
        </Text>
    </View>
  }
}
