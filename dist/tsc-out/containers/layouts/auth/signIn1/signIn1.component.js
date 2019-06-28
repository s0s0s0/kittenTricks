import React from 'react';
import { ImageBackground, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { SignInForm1, SocialAuth, } from '../../../../components/auth';
import { ScrollableAvoidKeyboard, textStyle, } from '../../../../components/common';
import { ArrowForwardIconOutline, HeartIconFill, } from '../../../../assets/icons';
import { imageSignIn1Bg, } from '../../../../assets/images';
class SignIn1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formData: undefined,
        };
        this.backgroundImage = imageSignIn1Bg;
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
        this.onEwaButtonPress = () => {
            this.props.onEwaPress();
        };
        this.onFormDataChange = (formData) => {
            this.setState({ formData });
        };
        this.renderEwaButtonIcon = (style) => {
            const { themedStyle } = this.props;
            return HeartIconFill(Object.assign({}, style, themedStyle.ewaButtonIcon));
        };
        this.renderSignUpButtonIcon = (style) => {
            const { themedStyle } = this.props;
            return ArrowForwardIconOutline(Object.assign({}, style, themedStyle.signUpButtonIcon));
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<ScrollableAvoidKeyboard>
        <ImageBackground style={themedStyle.container} source={this.backgroundImage.imageSource}>
          <Button appearance='ghost' style={themedStyle.ewaButton} textStyle={themedStyle.ewaButtonText} size='large' activeOpacity={0.75} icon={this.renderEwaButtonIcon} onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signInContainer}>
            <Text style={themedStyle.signInLabel} category='h4'>
              SIGN IN
            </Text>
            <Button style={themedStyle.signUpButton} textStyle={themedStyle.signUpButtonText} activeOpacity={0.75} appearance='ghost' size='giant' icon={this.renderSignUpButtonIcon} onPress={this.onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>
          <SignInForm1 style={themedStyle.formContainer} onDataChange={this.onFormDataChange}/>
          <Button size='large' textStyle={textStyle.button} disabled={!this.state.formData} onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <SocialAuth style={themedStyle.socialAuthContainer} iconStyle={themedStyle.socialAuthIcon} hintStyle={themedStyle.socialAuthHint} hint='Sign with a social account' onGooglePress={this.onGoogleButtonPress} onFacebookPress={this.onFacebookButtonPress} onTwitterPress={this.onTwitterButtonPress}/>
        </ImageBackground>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignIn1 = withStyles(SignIn1Component, (theme) => ({
    container: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
    },
    socialAuthContainer: {
        marginTop: 48,
    },
    ewaButton: {
        maxWidth: 72,
        paddingHorizontal: 0,
    },
    ewaButtonText: Object.assign({ color: 'white' }, textStyle.button),
    ewaButtonIcon: {
        marginHorizontal: 0,
        tintColor: 'white',
    },
    formContainer: {
        flex: 1,
        marginTop: 48,
    },
    signInLabel: Object.assign({ flex: 1 }, textStyle.headline, { color: 'white' }),
    signUpButton: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 0,
    },
    signUpButtonText: {
        color: 'white',
    },
    signUpButtonIcon: {
        marginHorizontal: 0,
        tintColor: 'white',
    },
    socialAuthIcon: {
        tintColor: 'white',
    },
    socialAuthHint: {
        color: 'white',
    },
}));
//# sourceMappingURL=signIn1.component.js.map