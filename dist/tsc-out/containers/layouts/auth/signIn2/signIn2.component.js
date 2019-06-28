import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { SignInForm2, } from '../../../../components/auth';
import { ScrollableAvoidKeyboard, textStyle, } from '../../../../components/common';
import { View } from 'react-native';
class SignIn2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formData: undefined,
        };
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
        return (<ScrollableAvoidKeyboard style={themedStyle.container}>
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
          Don't have an account? Create
        </Button>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignIn2 = withStyles(SignIn2Component, (theme) => {
    return ({
        container: {
            flex: 1,
            backgroundColor: theme['background-basic-color-1'],
        },
        headerContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 216,
            backgroundColor: theme['color-primary-default'],
        },
        formContainer: {
            flex: 1,
            marginTop: 32,
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
        signUpText: Object.assign({ color: theme['text-hint-color'] }, textStyle.subtitle),
    });
});
//# sourceMappingURL=signIn2.component.js.map