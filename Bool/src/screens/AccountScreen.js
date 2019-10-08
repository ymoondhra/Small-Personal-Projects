import React from 'react';
import { 
  View,
  Text,
  Image,
  // Alert,
} from 'react-native';
import { Video, SplashScreen } from 'expo';

import styles from './styles/AccountScreenStyle';
import LoginButton from '../components/LoginButton';
import FadeInView from '../components/FadeIn';

// export default class AccountScreen extends React.Component {
//   render() {
//     return (
//       <View style={{backgroundColor: 'blue', flex: 1,}}>
//       </View>
//     );
//   }
// }

    //      <Image style={styles.imageBackground}
    //             source={require('../../assets/boolBackgroundImage.png')}
    //      />

export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);
    SplashScreen.hide();
  }

  render() {
    return(
      <View style={styles.container} > 
        <FadeInView style={styles.fadeInContainer}>
          <Video  style={styles.videoBackground}
                  source={require('../../assets/boolBackground.mp4')}
                  isMuted={true}
                  rate={1}
                  resizeMode="stretch"
                  shouldPlay
                  isLooping
                  usePoster
          />
          <View style={styles.logoContainer}>
              <Text style={styles.logo}>
                Bool
              </Text>
          </View>
          <View style={styles.loginOptions}>
            <LoginButton title='Continue with Facebook'
                         facebook
            />
            <LoginButton title='Continue with Google'
                         gmail
            />
            <View style={styles.verticalLineContainer}>
              <View style={styles.verticalLine} />
              <Text style={styles.verticalLineText}> OR </Text>
              <View style={styles.verticalLine} />
            </View>
            <LoginButton title='Continue with email'
                         email
            />
          </View>
        </FadeInView> 
      </View>
    );
  }
}