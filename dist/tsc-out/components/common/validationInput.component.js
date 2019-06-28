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
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { Input, } from '../../../node_modules/react-native-ui-kitten/ui';
/**
 * You probably don't need to pass `value` prop into this component
 */
class ValidationInputComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.value,
        };
        this.onChangeText = (text) => {
            const { formatter } = this.props;
            const value = formatter ? formatter(text, this.state.value) : text;
            this.setState({ value }, this.onValueChange);
        };
        this.onValueChange = () => {
            const { value } = this.state;
            if (this.isValid(value) && this.props.onChangeText) {
                this.props.onChangeText(value);
            }
        };
        this.isValid = (value) => {
            const { validator } = this.props;
            return validator(value);
        };
        this.getStatus = () => {
            const { value } = this.state;
            if (value && value.length) {
                return this.isValid(value) ? 'success' : 'danger';
            }
            return undefined;
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const { value: oldValue } = prevState;
        const { value: newValue } = this.state;
        const becomeValid = !this.isValid(oldValue) && this.isValid(newValue);
        const becomeInvalid = !this.isValid(newValue) && this.isValid(oldValue);
        if (becomeValid) {
            this.props.onChangeText(newValue);
        }
        else if (becomeInvalid) {
            this.props.onChangeText(undefined);
        }
    }
    render() {
        const _a = this.props, { style, themedStyle } = _a, restProps = __rest(_a, ["style", "themedStyle"]);
        return (<Input autoCapitalize='none' status={this.getStatus()} {...restProps} value={this.state.value} style={[themedStyle.container, style]} onChangeText={this.onChangeText}/>);
    }
}
export const ValidationInput = withStyles(ValidationInputComponent, (theme) => ({
    container: {},
}));
//# sourceMappingURL=validationInput.component.js.map