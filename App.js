import React, {Component} from 'react'
import {StyleSheet, Text, View } from 'react-native'

import Navigation from './navigation'

import Block from './components/Block'
export default class App extends Component {
  render(){
    return(
      <Block white>
        <Navigation/>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  
})