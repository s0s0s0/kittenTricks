import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Button, Text, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { SignUpForm1, SocialAuth, } from '../../../../components/auth';
import { ScrollableAvoidKeyboard, ImageOverlay, textStyle, } from '../../../../components/common';
import { ArrowForwardIconOutline, HeartIconFill, } from '../../../../assets/icons';
import { imageSignUp1Bg, } from '../../../../assets/images';
class SignUp1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formData: undefined,
        };
        this.backgroundImage = imageSignUp1Bg;
        this.onFormDataChange = (formData) => {
            this.setState({ formData });
        };
        this.onSignUpButtonPress = () => {
            this.props.onSignUpPress(this.state.formData);
        };
        this.onSignInButtonPress = () => {
            this.props.onSignInPress();
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
        this.renderEwaButtonIcon = (style) => {
            const { themedStyle } = this.props;
            return HeartIconFill(Object.assign({}, style, themedStyle.ewaButtonIcon));
        };
        this.renderSignInButtonIcon = (style) => {
            const { themedStyle } = this.props;
            return ArrowForwardIconOutline(Object.assign({}, style, themedStyle.signInButtonIcon));
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<ScrollableAvoidKeyboard style={themedStyle.container}>
        <ImageOverlay style={themedStyle.headerContainer} source={this.backgroundImage.imageSource}>
          <Button appearance='ghost' style={themedStyle.ewaButton} textStyle={themedStyle.ewaButtonText} size='large' activeOpacity={0.75} icon={this.renderEwaButtonIcon} onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signUpContainer}>
            <Text style={themedStyle.signInLabel} category='h4'>
              SIGN UP
            </Text>
            <Button style={themedStyle.signInButton} textStyle={themedStyle.signInButtonText} appearance='ghost' size='giant' activeOpacity={0.75} icon={this.renderSignInButtonIcon} onPress={this.onSignInButtonPress}>
              Sign In
            </Button>
          </View>
        </ImageOverlay>
        <SocialAuth style={themedStyle.socialAuthContainer} hintStyle={themedStyle.socialAuthHint} iconStyle={themedStyle.socialAuthIcon} hint='Sign with a social account' onGooglePress={this.onGoogleButtonPress} onFacebookPress={this.onFacebookButtonPress} onTwitterPress={this.onTwitterButtonPress}/>
        <View style={themedStyle.orContainer}>
          <View style={themedStyle.divider}/>
          <Text style={themedStyle.orLabel} category='h5'>
            OR
          </Text>
          <View style={themedStyle.divider}/>
        </View>
        <Text style={themedStyle.emailSignLabel}>
          Sign up with Email
        </Text>
        <SignUpForm1 style={themedStyle.formContainer} onDataChange={this.onFormDataChange}/>
        <Button style={themedStyle.signUpButton} textStyle={textStyle.button} size='large' disabled={!this.state.formData} onPress={this.onSignUpButtonPress}>
          SIGN UP
        </Button>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignUp1 = withStyles(SignUp1Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    headerContainer: {
        minHeight: 200,
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 44,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },
    socialAuthContainer: {
        marginTop: 24,
    },
    formContainer: {
        marginTop: 48,
        paddingHorizontal: 16,
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
    signInLabel: Object.assign({ flex: 1, color: 'white' }, textStyle.headline),
    signInButton: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 0,
    },
    signInButtonText: Object.assign({ color: 'white' }, textStyle.button),
    signInButtonIcon: {
        marginHorizontal: 0,
        tintColor: 'white',
    },
    signUpButton: {
        marginVertical: 24,
        marginHorizontal: 16,
    },
    socialAuthHint: Object.assign({}, textStyle.paragraph),
    socialAuthIcon: {
        tintColor: theme['text-basic-color'],
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 52,
    },
    orLabel: Object.assign({ marginHorizontal: 8 }, textStyle.headline),
    emailSignLabel: Object.assign({ alignSelf: 'center', marginTop: 8 }, textStyle.paragraph),
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: theme['background-basic-color-3'],
    },
}));
//# sourceMappingURL=signUp1.component.js.map