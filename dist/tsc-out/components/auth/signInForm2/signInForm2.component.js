var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button } from 'react-native-ui-kitten/ui';
import { textStyle, ValidationInput, } from '@src/components/common';
import { EyeOffIconFill, PersonIconFill, } from '@src/assets/icons';
import { NameValidator, PasswordValidator, } from '@src/core/validators';
class SignInForm2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            username: undefined,
            password: undefined,
        };
        this.onForgotPasswordButtonPress = () => {
            this.props.onForgotPasswordPress();
        };
        this.onUsernameInputTextChange = (username) => {
            this.setState({ username });
        };
        this.onPasswordInputTextChange = (password) => {
            this.setState({ password });
        };
        this.isValid = (value) => {
            const { username, password } = value;
            return username !== undefined
                && password !== undefined;
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const oldFormValid = this.isValid(prevState);
        const newFormValid = this.isValid(this.state);
        const isStateChanged = this.state !== prevState;
        const becomeValid = !oldFormValid && newFormValid;
        const becomeInvalid = oldFormValid && !newFormValid;
        const remainValid = oldFormValid && newFormValid;
        if (becomeValid) {
            this.props.onDataChange(this.state);
        }
        else if (becomeInvalid) {
            this.props.onDataChange(undefined);
        }
        else if (isStateChanged && remainValid) {
            this.props.onDataChange(this.state);
        }
    }
    render() {
        const _a = this.props, { style, themedStyle } = _a, restProps = __rest(_a, ["style", "themedStyle"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput textStyle={textStyle.paragraph} placeholder='User Name' icon={PersonIconFill} validator={NameValidator} onChangeText={this.onUsernameInputTextChange}/>
          <ValidationInput style={themedStyle.passwordInput} textStyle={textStyle.paragraph} placeholder='Password' icon={EyeOffIconFill} secureTextEntry={true} validator={PasswordValidator} onChangeText={this.onPasswordInputTextChange}/>
          <View style={themedStyle.forgotPasswordContainer}>
            <Button style={themedStyle.forgotPasswordButton} textStyle={themedStyle.forgotPasswordText} appearance='ghost' activeOpacity={0.75} onPress={this.onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>
      </View>);
    }
}
export const SignInForm2 = withStyles(SignInForm2Component, (theme) => ({
    container: {},
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    passwordInput: {
        marginTop: 16,
    },
    forgotPasswordButton: {
        paddingHorizontal: 0,
    },
    forgotPasswordText: Object.assign({ fontSize: 15, color: theme['text-hint-color'] }, textStyle.subtitle),
}));
//# sourceMappingURL=signInForm2.component.js.map