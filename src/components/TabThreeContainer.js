import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import {WebView} from "react-native-webview";

const { width, height } = Dimensions.get('window');

export default class TabThreeContainer extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          source={{uri: 'https://www.sina.com'}}
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
          }}
          onLoad={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
          }}
          style={styles.webView}
        />
        {/*<Text style={styles.welcome}>Tab Three Container</Text>*/}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F500FF',
  },
  webView:{
    width: width,
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
