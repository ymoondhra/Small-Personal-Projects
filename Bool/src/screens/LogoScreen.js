import React from 'react';
import { 
  View,
  Image,
  // Alert,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { SplashScreen, Asset } from 'expo';

import styles from './styles/LogoScreenStyle';
import AccountScreen from './AccountScreen';

function cacheVids(vids) {
  return vids.map(vid => Asset.fromModule(vid).downloadAsync());
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class LogoScreen extends React.Component {
	  static navigationOptions = {
	    title: 'Home',
	    headerStyle: {
	      backgroundColor: '#f4511e',
	    },
	    headerTintColor: '#fff',
	    headerTitleStyle: {
	      fontWeight: 'bold',
	    },
	  };
  	constructor(props) {
  		super(props);
  	}

	componentDidMount() {
		SplashScreen.hide();
		const { navigate } = this.props.navigation;
		var x = 0;

		if(x == 0) {
			this.fetchAssets()
		      .then(() => {navigate('Auth');})
		      .catch(error => console.error(`Error while loading: ${error.stack}`));
	    }
	    else if(x == 1) {
	    	navigate('Home');
	    }
	}

	render() {
	    return(
		   	<View style={styles.container}>
		        <Image style={styles.imageBackground}
		               source={require('../../assets/splash.png')}
		        />
		        <Text> HELLOOOO </Text>
		    </View> 
	    );
	 }

	async fetchAssets() {
		const vidAssets = cacheVids([require('../../assets/boolBackground.mp4')])
		const imgAssets = cacheImages([require('../../assets/boolBackgroundImage.png')])
    	await Promise.all([...vidAssets,  ...imgAssets]);
  	}
}