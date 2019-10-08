import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
		backgroundColor: 'black',
	},
	fadeInContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	logoContainer: {
		flex: 0.5,
		flexDirection: 'row',
		zIndex: 3,
		justifyContent: 'center',
	},
	logo: {
		flex: 1,
		alignSelf: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FF4D2E',
		fontSize: 65,
		fontFamily: 'gotham-rounded-bold',
	},
	loginOptions: {
		flex: 0.5,
		zIndex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	verticalLineContainer: {
		width: '70%',
		zIndex: 3,
		flexDirection: 'row',
  		alignItems: 'center',
	},
	verticalLine: {
		flex: 1,
		height: 0,
		borderTopWidth: 1,
  		borderColor: 'snow',
	},
	verticalLineText: {
		margin: 10,
		color: 'snow',
		fontFamily: 'montserrat-medium',
	},
	imageBackground: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		zIndex: 1,
		borderWidth: 5,
		borderColor: 'red',
	},
	videoBackground: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		zIndex: 2,
		borderWidth: 5,
		borderColor: 'blue',
	},
});
