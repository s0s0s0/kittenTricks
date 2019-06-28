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
import { textStyle, ValidationInput, } from '@src/components/common';
import { EmailValidator, PasswordValidator, } from '@src/core/validators';
class SignInForm1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            email: undefined,
            password: undefined,
        };
        this.onEmailInputTextChange = (email) => {
            this.setState({ email });
        };
        this.onPasswordInputTextChange = (password) => {
            this.setState({ password });
        };
        this.isValid = (value) => {
            const { email, password } = value;
            return email !== undefined
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
        const _a = this.props, { style, themedStyle, theme } = _a, restProps = __rest(_a, ["style", "themedStyle", "theme"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <ValidationInput style={themedStyle.emailInput} textStyle={textStyle.paragraph} labelStyle={textStyle.label} label='EMAIL' placeholder='Email' validator={EmailValidator} onChangeText={this.onEmailInputTextChange}/>
        <ValidationInput style={themedStyle.passwordInput} textStyle={textStyle.paragraph} labelStyle={textStyle.label} secureTextEntry={true} placeholder='Password' label='PASSWORD' validator={PasswordValidator} onChangeText={this.onPasswordInputTextChange}/>
      </View>);
    }
}
export const SignInForm1 = withStyles(SignInForm1Component, (theme) => ({
    container: {},
    emailInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    passwordInput: {
        marginTop: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
}));
//# sourceMappingURL=signInForm1.component.js.map