import React from 'react'
import {Stylesheet, Image} from 'react-native'
import { createAppContainer,  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


import Welcome from '../screens/welcome'

import { theme } from '../constants'

const screens = createStackNavigator({
  Welcome,
},{
  defaultNavigationOptions: {
    headerStyle: {},
    headerBackImage: <Image/>,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {},
    //header:null

    


  }
});
export default createAppContainer(screens);