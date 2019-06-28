import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { SignInForm2, } from '../../../../components/auth';
import { ScrollableAvoidKeyboard, ImageOverlay, textStyle, } from '../../../../components/common';
import { imageSignIn3Bg, } from '../../../../assets/images';
class SignIn3Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formData: undefined,
        };
        this.backgroundImage = imageSignIn3Bg;
        this.onSignInButtonPress = () => {
            this.props.onSignInPress(this.state.formData);
        };
        this.onSignUpButtonPress = () => {
            this.props.onSignUpPress();
        };
        this.onForgotPasswordButtonPress = () => {
            this.props.onForgotPasswordPress();
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
          <Button style={themedStyle.signUpButton} textStyle={themedStyle.signUpText} appearance='ghost' activeOpacity={0.75} onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignIn3 = withStyles(SignIn3Component, (theme) => ({
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
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    helloLabel: Object.assign({ color: 'white' }, textStyle.headline),
    signInLabel: Object.assign({ marginTop: 16, color: 'white' }, textStyle.subtitle),
    signInButton: {
        marginHorizontal: 16,
    },
    signUpButton: {
        marginVertical: 12,
    },
    signUpText: Object.assign({ color: 'white' }, textStyle.subtitle),
}));
//# sourceMappingURL=signIn3.component.js.map