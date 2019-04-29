import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import {WebView} from 'react-native-webview'

const { width, height } = Dimensions.get('window');

export default class TabOneContainer extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*<Text style={styles.welcome}>Tab One Container</Text>*/}
        <WebView
          source={{uri: 'https://www.baidu.com'}}
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
          }}
          onLoad={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
          }}
          style={styles.webView}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
