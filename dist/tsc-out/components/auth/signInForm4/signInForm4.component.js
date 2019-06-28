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
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { textStyle, ValidationInput, } from '../../common';
import { PhoneNumberValidator, SMSCodeValidator, } from '../../../core/validators';
import { LockIconFill, PhoneIconFill, } from '../../../assets/icons';
class SignInForm4Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            phone: undefined,
            code: undefined,
        };
        this.onPhoneInputTextChange = (phone) => {
            this.setState({ phone });
        };
        this.onCodeInputTextChange = (code) => {
            this.setState({ code });
        };
        this.isValid = (value) => {
            const { phone, code } = value;
            return phone !== undefined
                && code !== undefined;
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
        <ValidationInput style={themedStyle.phoneInput} textStyle={textStyle.paragraph} placeholder='Phone Number' icon={PhoneIconFill} validator={PhoneNumberValidator} onChangeText={this.onPhoneInputTextChange}/>
        <ValidationInput style={themedStyle.codeInput} textStyle={textStyle.paragraph} placeholder='SMS Code' secureTextEntry={true} icon={LockIconFill} validator={SMSCodeValidator} onChangeText={this.onCodeInputTextChange}/>
      </View>);
    }
}
export const SignInForm4 = withStyles(SignInForm4Component, (theme) => ({
    container: {},
    phoneInput: {},
    codeInput: {
        marginTop: 16,
    },
}));
//# sourceMappingURL=signInForm4.component.js.map