import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Button } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { SignUpForm2, } from '../../../../components/auth';
import { ProfilePhoto } from '../../../../components/social';
import { ScrollableAvoidKeyboard, ImageOverlay, textStyle, } from '../../../../components/common';
import { PlusIconFill, } from '../../../../assets/icons';
import { imageSignUp3Bg, } from '../../../../assets/images';
class SignUp3Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formData: undefined,
        };
        this.backgroundImage = imageSignUp3Bg;
        this.profileImage = require('../../../../assets/icons/eva/person.png');
        this.onFormDataChange = (formData) => {
            this.setState({ formData });
        };
        this.onPhotoButtonPress = () => {
            this.props.onPhotoPress();
        };
        this.onSignInButtonPress = () => {
            this.props.onSignInPress();
        };
        this.onSignUpButtonPress = () => {
            this.props.onSignUpPress(this.state.formData);
        };
        this.renderPhotoButtonIcon = (style) => {
            const { themedStyle } = this.props;
            return PlusIconFill(Object.assign({}, style, themedStyle.photoButtonIcon));
        };
        this.renderPhotoButton = () => {
            const { themedStyle } = this.props;
            return (<Button style={themedStyle.photoButton} icon={this.renderPhotoButtonIcon} onPress={this.onPhotoButtonPress}/>);
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
          <Button style={themedStyle.signInButton} textStyle={themedStyle.signUpText} appearance='ghost' activeOpacity={0.75} onPress={this.onSignInButtonPress}>
            Already have an account? Sign In
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignUp3 = withStyles(SignUp3Component, (theme) => ({
    container: {
        flex: 1,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216,
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    photo: {
        width: 116,
        height: 116,
        borderRadius: 58,
        alignSelf: 'center',
        backgroundColor: theme['background-basic-color-1'],
        tintColor: theme['text-hint-color'],
    },
    photoButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        transform: [{ translateY: 80 }],
    },
    photoButtonIcon: {
        width: 24,
        height: 24,
    },
    signUpButton: {
        marginHorizontal: 16,
    },
    signInButton: {
        marginVertical: 12,
    },
    signUpText: Object.assign({ color: 'white' }, textStyle.subtitle),
}));
//# sourceMappingURL=signUp3.component.js.map