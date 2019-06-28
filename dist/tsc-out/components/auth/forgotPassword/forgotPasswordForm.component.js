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
import { EmailIconFill } from '../../../assets/icons';
import { EmailValidator } from '../../../core/validators';
class ForgotPasswordFormComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            email: undefined,
        };
        this.onEmailInputTextChange = (email) => {
            this.setState({ email });
        };
        this.isValid = (value) => {
            const { email } = value;
            return email !== undefined;
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
        <ValidationInput textStyle={textStyle.paragraph} placeholder='Email' icon={EmailIconFill} validator={EmailValidator} onChangeText={this.onEmailInputTextChange}/>
      </View>);
    }
}
export const ForgotPasswordForm = withStyles(ForgotPasswordFormComponent, (theme) => ({
    container: {},
}));
//# sourceMappingURL=forgotPasswordForm.component.js.map