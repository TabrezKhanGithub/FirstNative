import { Button, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [name,SetName] =useState('');
  const[submitted,SetSubmitted] = useState(false);
  const [inputState,setInputState] = useState(name);
  const onClickHandler = () => {
    SetSubmitted(!submitted);
  }
  return (
    <View style ={styles.body}>
      <Text style ={styles.text}>Please Write your name: </Text>
      <TextInput placeholder='e.g. John' style={styles.input} 
      onChangeText ={(value) => SetName(value)}
      />
      <Pressable
      onPress={onClickHandler}
      style= {({pressed})=>[
          {backgroundColor: pressed ? '#dddddd' : '#00ff22'},
      styles.button    
      ]}
      >
        <Text style ={styles.text}>{submitted ? 'clear':'Submit'}</Text>
      </Pressable>
      {/* <Button title= { submitted ? 'clear':'Submit'} onPress={onClickHandler} disabled={submitted}/> */}
      {/* <TouchableOpacity onPress={onClickHandler}
      style = {styles.button}
      activeOpacity={0.6}
      >
        <Text style ={styles.text}>{submitted ? 'clear':'Submit'}</Text>
      </TouchableOpacity> */}
     {/* ---- <TouchableHighlight/>
      <TouchableWithoutFeedback/> ----- */}
      {
        submitted ? <Text style = {styles.text}>You are registered as {name}</Text> : null
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  body :{
    flex :1,
    alignItems :'center'
  },
  text:{
    fontSize :24
  },
  input:{
    borderWidth :2,
    // height : 50,
    width: 140,
    borderRadius: 5,
    margin :10,
    textAlign:'center',
    fontSize :20,
  },
  textinput :{
    textAlign :'center',
    fontSize : 20,
  },
  button:{
    margin: 10,
    width: 150,
    height :50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius :10,
    backgroundColor : '#00ff22'
  }
})