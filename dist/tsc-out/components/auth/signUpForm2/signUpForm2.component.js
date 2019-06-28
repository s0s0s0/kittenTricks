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
import { CheckBox } from 'react-native-ui-kitten/ui';
import { textStyle, ValidationInput, } from '../../common';
import { EmailIconFill, EyeOffIconFill, PersonIconFill, } from '../../../assets/icons';
import { EmailValidator, NameValidator, PasswordValidator, } from '../../../core/validators';
class SignUpForm2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            username: undefined,
            email: undefined,
            password: undefined,
            termsAccepted: false,
        };
        this.onTermsValueChange = (termsAccepted) => {
            this.setState({ termsAccepted });
        };
        this.onUsernameInputTextChange = (username) => {
            this.setState({ username });
        };
        this.onEmailInputTextChange = (email) => {
            this.setState({ email });
        };
        this.onPasswordInputValidationResult = (password) => {
            this.setState({ password });
        };
        this.isValid = (value) => {
            const { username, password, email, termsAccepted } = value;
            return username !== undefined
                && password !== undefined
                && email !== undefined
                && termsAccepted;
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
          <ValidationInput style={themedStyle.usernameInput} textStyle={textStyle.paragraph} autoCapitalize='none' placeholder='User Name' icon={PersonIconFill} validator={NameValidator} onChangeText={this.onUsernameInputTextChange}/>
          <ValidationInput style={themedStyle.emailInput} textStyle={textStyle.paragraph} autoCapitalize='none' placeholder='Email' icon={EmailIconFill} validator={EmailValidator} onChangeText={this.onEmailInputTextChange}/>
          <ValidationInput style={themedStyle.passwordInput} textStyle={textStyle.paragraph} autoCapitalize='none' secureTextEntry={true} placeholder='Password' icon={EyeOffIconFill} validator={PasswordValidator} onChangeText={this.onPasswordInputValidationResult}/>
          <CheckBox style={themedStyle.termsCheckBox} textStyle={themedStyle.termsCheckBoxText} checked={this.state.termsAccepted} onChange={this.onTermsValueChange} text='I read and agree to Terms & Conditions'/>
        </View>
      </View>);
    }
}
export const SignUpForm2 = withStyles(SignUpForm2Component, (theme) => ({
    container: {},
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    usernameInput: {},
    emailInput: {
        marginTop: 16,
    },
    passwordInput: {
        marginTop: 16,
    },
    termsCheckBox: {
        marginTop: 24,
    },
    termsCheckBoxText: Object.assign({ color: theme['text-hint-color'] }, textStyle.subtitle),
}));
//# sourceMappingURL=signUpForm2.component.js.map