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
import { DOBValidator, EmailValidator, NameValidator, PasswordValidator, } from '../../../core/validators';
class SignUpForm1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            firstName: undefined,
            lastName: undefined,
            date: undefined,
            email: undefined,
            password: undefined,
            termsAccepted: false,
        };
        this.onFirstNameInputTextChange = (firstName) => {
            this.setState({ firstName });
        };
        this.onLastNameValidationResult = (lastName) => {
            this.setState({ lastName });
        };
        this.onDateInputTextChange = (date) => {
            this.setState({ date });
        };
        this.onEmailInputTextChange = (email) => {
            this.setState({ email });
        };
        this.onPasswordInputTextChange = (password) => {
            this.setState({ password });
        };
        this.onTermsAcceptChange = (termsAccepted) => {
            this.setState({ termsAccepted });
        };
        this.isValid = (value) => {
            const { firstName, lastName, date, email, password, termsAccepted } = value;
            return firstName !== undefined
                && lastName !== undefined
                && date !== undefined
                && email !== undefined
                && password !== undefined
                && termsAccepted;
        };
        this.passwordCaption = () => {
            return this.state.password ? 'Password entered correctly' : 'Password entered incorrectly';
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
        <ValidationInput style={[themedStyle.input, themedStyle.firstNameInput]} textStyle={themedStyle.inputText} placeholder='Ally' label='FIRST NAME' autoCapitalize='words' validator={NameValidator} onChangeText={this.onFirstNameInputTextChange}/>
        <ValidationInput style={themedStyle.input} textStyle={textStyle.paragraph} labelStyle={textStyle.label} placeholder='Watsan' label='LAST NAME' autoCapitalize='words' validator={NameValidator} onChangeText={this.onLastNameValidationResult}/>
        <ValidationInput style={themedStyle.input} textStyle={textStyle.paragraph} labelStyle={textStyle.label} placeholder='18/10/1995' label='DATE OF BIRTHDAY' validator={DOBValidator} onChangeText={this.onDateInputTextChange}/>
        <ValidationInput style={themedStyle.input} textStyle={themedStyle.inputText} labelStyle={themedStyle.inputLabel} placeholder='ally.watsan@gmail.com' label='EMAIL' validator={EmailValidator} onChangeText={this.onEmailInputTextChange}/>
        <ValidationInput style={themedStyle.input} textStyle={textStyle.paragraph} labelStyle={textStyle.label} captionTextStyle={textStyle.paragraph} label='PASSWORD' placeholder='Password' caption={this.passwordCaption()} secureTextEntry={true} validator={PasswordValidator} onChangeText={this.onPasswordInputTextChange}/>
        <CheckBox style={themedStyle.termsCheckBox} textStyle={themedStyle.termsCheckBoxText} checked={this.state.termsAccepted} text={'By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy'} onChange={this.onTermsAcceptChange}/>
      </View>);
    }
}
export const SignUpForm1 = withStyles(SignUpForm1Component, (theme) => ({
    container: {},
    input: {
        marginTop: 16,
    },
    firstNameInput: {
        marginTop: 0,
    },
    termsCheckBox: {
        marginTop: 20,
    },
    termsCheckBoxText: Object.assign({ fontSize: 11, color: theme['text-hint-color'] }, textStyle.paragraph),
}));
//# sourceMappingURL=signUpForm1.component.js.map