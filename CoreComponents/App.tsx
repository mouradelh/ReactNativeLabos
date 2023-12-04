import React from "react";
import { Text, View, StyleSheet, Button, Image, TextInput, Alert } from "react-native";

const random0to10 = ():number => {
  return Math.floor(Math.random() * 10);
}

const App = () => {
  return (
    <>
    <View style={styles.container}>
      <Text>Het getal is {random0to10()}</Text>
      <View style={styles.subview}>
        <Text style={styles.textSubview}>Subview</Text>
      </View>
      <View>
      <Image style={styles.picture} source={require("./assets/Blaziken.png")}/>
      </View>
      <View>
        <Image style={styles.picture} source={{uri:"https://img.fruugo.com/product/7/41/14532417_max.jpg"}}></Image>
      </View>
      <View>
        <TextInput 
        secureTextEntry={true}
        placeholder="enter password"
        keyboardType="default"
        onKeyPress={(event)=> {
          Alert.alert("pressed")
        }}
        />
          
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff",
  },
  subview: {
    width: 100,
    borderStyle : "solid",
    borderWidth : 2,
    borderColor : "red",
    padding : 10
  },
  textSubview: {
    backgroundColor: "blue",
    color: "white"
  },
  picture: {
    width : 100,
    height: 100
  }
});

export default App;