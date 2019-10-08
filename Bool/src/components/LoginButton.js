import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	Image,
} from 'react-native';

import styles from './styles/loginButtonStyle';

const LoginButton = ({title, onPress, facebook, gmail, email}) => {
	const containerStyles = [styles.facebook];

	var iconImg = require('../../assets/facebook.png');

	if(gmail) {
		containerStyles.push(styles.gmail);
		iconImg = require('../../assets/gmail.png');
	}
	else if(email) {
		containerStyles.push(styles.email);
		iconImg = require('../../assets/email.png');
	}

	return (
		<View style={containerStyles}>
			<TouchableOpacity style={styles.button}
							  onPress={onPress} 
			>
					<Image style={styles.logo}
						   source={iconImg}
	                 	   
	            	/>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default LoginButton;
