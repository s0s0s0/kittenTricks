import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button } from 'react-native-ui-kitten/ui';
import { SignUpForm2, SocialAuth, } from '@src/components/auth';
import { ProfilePhoto } from '@src/components/social';
import { ImageOverlay, ScrollableAvoidKeyboard, textStyle, } from '@src/components/common';
import { PlusIconFill, } from '@src/assets/icons';
import { imageSignUp4Bg, } from '@src/assets/images';
class SignUp4Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formData: undefined,
        };
        this.backgroundImage = imageSignUp4Bg;
        this.profileImage = require('../../../../assets/icons/eva/person.png');
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
        this.onPhotoButtonPress = () => {
            this.props.onPhotoPress();
        };
        this.renderPhotoButtonIcon = (style) => {
            const { themedStyle } = this.props;
            return PlusIconFill(Object.assign({}, style, themedStyle.photoButtonIcon));
        };
        this.renderPhotoButton = () => {
            const { themedStyle } = this.props;
            return (<Button style={themedStyle.photoButton} textStyle={textStyle.button} size='small' icon={this.renderPhotoButtonIcon} onPress={this.onPhotoButtonPress}/>);
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<ScrollableAvoidKeyboard>
        <ImageOverlay style={themedStyle.container} source={this.backgroundImage.imageSource}>
          <View style={themedStyle.headerContainer}>
            <ProfilePhoto style={themedStyle.photo} resizeMode='center' source={this.profileImage.imageSource} button={this.renderPhotoButton}/>
          </View>
          <SignUpForm2 style={themedStyle.formContainer} onDataChange={this.onFormDataChange}/>
          <Button style={themedStyle.signUpButton} textStyle={textStyle.button} size='giant' disabled={!this.state.formData} onPress={this.onSignUpButtonPress}>
            SIGN UP
          </Button>
          <SocialAuth iconStyle={themedStyle.socialAuthIcon} hint='Or Sign In using Social Media' onGooglePress={this.onGoogleButtonPress} onFacebookPress={this.onFacebookButtonPress} onTwitterPress={this.onTwitterButtonPress}/>
          <Button style={themedStyle.signInButton} textStyle={themedStyle.signUpText} appearance='ghost' activeOpacity={0.75} onPress={this.onSignInButtonPress}>
            Already have account? Sign In
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignUp4 = withStyles(SignUp4Component, (theme) => ({
    container: {
        flex: 1,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 160,
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    photo: {
        width: 92,
        height: 92,
        borderRadius: 46,
        alignSelf: 'center',
        backgroundColor: theme['background-basic-color-1'],
        tintColor: theme['text-hint-color'],
    },
    photoButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        transform: [{ translateY: 64 }],
    },
    photoButtonIcon: {
        width: 20,
        height: 20,
    },
    socialAuthIcon: {
        tintColor: 'white',
    },
    signUpButton: {
        marginVertical: 16,
        marginHorizontal: 16,
    },
    signInButton: {
        marginVertical: 12,
    },
    signUpText: Object.assign({ color: 'white' }, textStyle.subtitle),
}));
//# sourceMappingURL=signUp4.component.js.map