import React from 'react'
import TabOneContainer from './TabOneContainer'
import TabTwoContainer from './TabTwoContainer'
import TabThreeContainer from './TabThreeContainer'
import MineContainer from './MineContainer'
import {createAppContainer, createBottomTabNavigator} from "react-navigation"
import Icon from 'react-native-vector-icons/Ionicons'

const TabContainer = createBottomTabNavigator(
  {
    TabOne: {
      screen:TabOneContainer,
      navigationOptions: {
        tabBarLabel: 'Tab1',
        tabBarIcon: ({tintColor})=>(
          <Icon name={'ios-laptop'} size={20} color={tintColor}/>
        )
      }
    },
    TabTwo: {
      screen:TabTwoContainer,
      navigationOptions: {
        tabBarLabel: 'Tab2',
        tabBarIcon: ({tintColor})=>(
          <Icon name={'ios-film'} size={20} color={tintColor}/>
        )
      }
    },
    TabThree: {
      screen:TabThreeContainer,
      navigationOptions: {
        tabBarLabel: 'Tab3',
        tabBarIcon: ({tintColor})=>(
          <Icon name={'ios-eye'} size={20} color={tintColor}/>
        )
      }
    },
    Mine: {
      screen:MineContainer,
      navigationOptions: {
        tabBarLabel: 'Mine',
        tabBarIcon: ({tintColor})=>(
          <Icon name={'ios-person'} size={20} color={tintColor}/>
        )
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 12,
        marginBottom: 5,
      },
      style: {
        borderTopWidth: 1,
        borderTopColor: '#c3c3c3',
        // height: 50,
        backgroundColor: '#fff'
      },
    }
  }
)

export default createAppContainer(TabContainer)
