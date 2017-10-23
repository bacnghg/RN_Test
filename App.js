import React from 'react';
import { Text, View} from 'react-native';
import { TabNavigator } from "react-navigation";

import FirstTab from './tabs/FirstTab'
import SecondTab from './tabs/SecondTab'
import ThirdTab from './tabs/ThirdTab'


var MainScreenNavigator = TabNavigator({
  Tab1: {screen: FirstTab},
  Tab2: {screen: SecondTab},
  Tab3: {screen: ThirdTab}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'steelblue',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'skyblue',
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
