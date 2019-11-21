import React, { Component } from 'react';

import { Animated, Dimensions, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';

import { theme } from '../constants'
import Intro from '../assets/images/servicioCalificado.png'
import Button from '../components/Button'
import Block from '../components/Block'
import TextApi from '../components/Text'

const { width, height } = Dimensions.get('window');
const l = [
  {id:1, source:Intro},
  {id:2, source: Intro},
  {id:3, source: Intro},
]
export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  state= {
    
  }
  scrollX = new Animated.Value(0);
  /* <FlatList
        horizontal
        paginEnabled
        scrollEnabled
        //showHorizontalScrollIndicator={false}
        scrollEventThottle={16}
        //snapToAlignment="center"
        data={l}
        //extraData={this.state}
        //keyExtractor={(item, index)=> `${item.id}`}
        renderItem={({item})=>{
          <Image
            source={Intro}
            reziMode="contain"
            style={{height:100,width:100}}
          />
        }}
      /> */
  renderIlustrations = () => {
    const { illustrations } = this.props;
    console.log(l)
    return (
      <FlatList
        horizontal
        paginEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        //scrollEventThrottle={16}
        snapToAlignment='center'
        data={illustrations}
        extraData={this.state}
        keyExtractor={(item, index)=> `${item.id}`}
        renderItem={({ item }) => (
          <Block center middle>
          <TextApi h3  color={"#1e90ff"} >{item.title}</TextApi>
          <Image
            source={item.source}
            reziMode="contain"
            style={{width, height: height/3, overflow: 'visible'}}
          />
          </Block>

          
        )}
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }])
        }
       
      />
    )
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          )
        })}
      </Block>
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block >
        <Block center middle flex={0.4}>
          <TextApi primary h1 center bold>
           Limpium.
             
              
          </TextApi>
          <TextApi h1 bold> Cuidamos de tu hogar. </TextApi>
          <TextApi  center h3 gray2 styles={{ marginTop: theme.sizes.padding / 2, }}>Ayudamos en Limpieza, Mascotas y mantenimiento.</TextApi>
          <Text style={{textAlign:'justify'}}></Text>
        </Block>
        <Block center middle>
          {this.renderIlustrations()}
          {this.renderSteps()}
        </Block>
        <Block  middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
         
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={.5}
            onPress={this.ButtonClickCheckFunction}
          >

            <Text style={styles.TextStyle}> Gmail </Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SignUpButton}
            activeOpacity={.5}
            onPress={this.ButtonClickCheckFunction}
          >

            <Text style={styles.TextStyle}> Entrar con Facebook </Text>

          </TouchableOpacity>
          <Button  color={"#0AC4BA"} shadow onPress={() => navigation.navigate('SignUp')}>
            <TextApi center semibold>Signup</TextApi>
          </Button>
          
        </Block>
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    {id:1, source: require('../assets/images/undraw_good_team_m7uu.png'), title:"Ayudamos con las tareas del hogar"},
    {id:2, source: require('../assets/images/undraw_hiring_cyhs.png'), title:"Servicio Seguro, personal calificado"},
    {id:3, source: require('../assets/images/undraw_calendar_dutt.png'), title:"Agenda ó reagenda si tienes planes"},
  ]
}
const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },


  SubmitButtonStyle: {

    //marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    //marginLeft: 30,
    //marginRight: 30,
    //backgroundColor: '#00BCD4',
    //#0AC4BA
    backgroundColor: "#d44638",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  SignUpButton: {

    //marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    //marginLeft: 30,
    //marginRight: 30,
    //backgroundColor: '#00BCD4',
    backgroundColor: "#3b5998",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  }

});
