import React from 'react';
import { Text, View} from 'react-native';
import { TabNavigator } from "react-navigation";

import FirstTab from './tabs/FirstTab'
import SecondTab from './tabs/SecondTab'


var MainScreenNavigator = TabNavigator({
  Tab1: {screen: FirstTab},
  Tab2: {screen: SecondTab}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'darkgreen',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'green',
    labelStyle: {
      fontSize: 16,
      padding: 0
    }
  }
});

MainScreenNavigator.navigationOptions ={
  title: 'Tab Example'
}

export default MainScreenNavigator;
