import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
       <Image source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7f196111289627.560f53245ebf4.jpg" }} style={{ width: 500, height: 300 }} />
      <Text></Text>
      <Text style={{color: '#888', fontSize: 20}}> 
      <text> Hi!  My name is Bob and im a builder. Whatttt upppp 

      </text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
