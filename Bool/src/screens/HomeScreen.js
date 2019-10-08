import React from 'react';
import { 
  View,
  Image,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Asset, SplashScreen } from 'expo';

import styles from './styles/LogoScreenStyle';

export default class HomoScreen extends React.Component {
  	constructor(props) {
  		super(props);
  		SplashScreen.hide();
  	}

	render() {
	    return(
		   	<View style={styles.container}>
		   		<Text> Hellooo </Text>
		    </View> 
	    );
	 }

}