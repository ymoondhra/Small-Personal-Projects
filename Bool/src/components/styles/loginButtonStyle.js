import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	button: {
		padding: 15,
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		flex: 1,
		color: 'snow',
		fontFamily: 'montserrat-medium',
		textAlign: 'center',
		fontSize: 17,
	},
	logo: {
		resizeMode: 'contain',
		position: 'absolute',
		height: 30,
		width: 30,
		margin: 10,
	},
	facebook: {
		width: '85%',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 50,
		backgroundColor: '#3b5998',
	},
	gmail: {
		backgroundColor: '#D94F3D',
	},
	email: {
		backgroundColor: '#434343',
	},

});
