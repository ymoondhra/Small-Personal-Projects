import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	container2: {
		position: 'absolute',
		height: '30%',
		width: '30%',
		backgroundColor: 'blue',
	},
	container3: {
		position: 'absolute',
		bottom: 0,
		height: '20%',
		width: '100%',
		backgroundColor: 'red',
	},
	logo: {
		flex: 0.5,
		resizeMode: 'contain',
		alignSelf: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FF4D2E',
	},
	videoBackground: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		zIndex: 2,
	},
	imageBackground: {
		resizeMode: 'contain',
		position: 'absolute',
		height: '100%',
		width: '100%',
	},
});
