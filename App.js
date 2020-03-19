import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';
import {WebView} from 'react-native-webview'

export default function App() {

  const topper = (Platform.OS === "android") ? <View style={styles.topper}/> : <View/>

  return (
    <SafeAreaView style={styles.container}>
      {topper}
      <WebView source={{uri: 'https://afrenchrussian.github.io/tailored-maps-v1'}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topper: {
    height: StatusBar.currentHeight,
    backgroundColor: 'black'
  }
});
