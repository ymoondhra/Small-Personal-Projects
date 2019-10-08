import React from 'react';
import { Animated, Easing, View } from 'react-native';

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
    // xPosition: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
    	this.state.fadeAnim, {
    		toValue: 1,
    		duration: 1,
        useNativeDriver: true,
    	}
    ).start();
    // Animated.timing(
    // 	this.state.xPosition, {
    // 		toValue: -15,
    // 		// easing: Easing.back(),
    // 		duration: 500,
    // }).start();
  }

  render() {
    let { fadeAnim, /* xPosition */ } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          // marginTop: xPosition,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}