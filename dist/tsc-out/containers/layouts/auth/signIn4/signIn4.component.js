import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { SignInForm2, SocialAuth, } from '../../../../components/auth';
import { ScrollableAvoidKeyboard, ImageOverlay, textStyle, } from '../../../../components/common';
import { imageSignIn4Bg, } from '../../../../assets/images';
class SignIn4Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formData: undefined,
        };
        this.backgroundImage = imageSignIn4Bg;
        this.onForgotPasswordButtonPress = () => {
            this.props.onForgotPasswordPress();
        };
        this.onSignInButtonPress = () => {
            this.props.onSignInPress(this.state.formData);
        };
        this.onSignUpButtonPress = () => {
            this.props.onSignUpPress();
        };
        this.onGoogleButtonPress = () => {
            this.props.onGooglePress();
        };
        this.onFacebookButtonPress = () => {
            this.props.onFacebookPress();
        };
        this.onTwitterButtonPress = () => {
            this.props.onTwitterPress();
        };
        this.onFormDataChange = (formData) => {
            this.setState({ formData });
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<ScrollableAvoidKeyboard>
        <ImageOverlay style={themedStyle.container} source={this.backgroundImage.imageSource}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.helloLabel} category='h1'>
              Hello
            </Text>
            <Text style={themedStyle.signInLabel} category='s1'>
              Sign in to your account
            </Text>
          </View>
          <SignInForm2 style={themedStyle.formContainer} onForgotPasswordPress={this.onForgotPasswordButtonPress} onDataChange={this.onFormDataChange}/>
          <Button style={themedStyle.signInButton} textStyle={textStyle.button} size='giant' disabled={!this.state.formData} onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <SocialAuth style={themedStyle.socialAuthContainer} iconStyle={themedStyle.socialAuthIcon} hint='Or Sign In using Social Media' onGooglePress={this.onGoogleButtonPress} onFacebookPress={this.onFacebookButtonPress} onTwitterPress={this.onTwitterButtonPress}/>
          <Button style={themedStyle.signUpButton} textStyle={themedStyle.signUpText} appearance='ghost' activeOpacity={0.75} onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignIn4 = withStyles(SignIn4Component, (theme) => ({
    container: {
        flex: 1,
    },
    headerContainer: {
        minHeight: 216,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    socialAuthContainer: {
        marginTop: 32,
    },
    helloLabel: Object.assign({ color: 'white' }, textStyle.headline),
    signInLabel: Object.assign({ marginTop: 16, color: 'white' }, textStyle.subtitle),
    socialAuthIcon: {
        tintColor: 'white',
    },
    signInButton: {
        marginHorizontal: 16,
    },
    signUpButton: {
        marginVertical: 12,
    },
    signUpText: Object.assign({ color: 'white' }, textStyle.subtitle),
}));
//# sourceMappingURL=signIn4.component.js.map