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
import { textStyle, ValidationInput, } from '../common';
import { CardNumberValidator, ExpirationDateValidator, CvvValidator, CardholderNameValidator, } from '../../core/validators';
import { CardNumberFormatter, ExpirationDateFormatter, CvvFormatter, CardholderNameFormatter, } from '../../core/formatters';
class AddNewCardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            cardNumber: undefined,
            expirationDate: undefined,
            cvv: undefined,
            cardholderName: undefined,
        };
        this.onCardNumberChange = (cardNumber) => {
            this.setState({ cardNumber });
        };
        this.onExpirationDateChange = (expirationDate) => {
            this.setState({ expirationDate });
        };
        this.onCvvChange = (cvv) => {
            this.setState({ cvv });
        };
        this.onCardHolderNameChange = (cardholderName) => {
            this.setState({ cardholderName });
        };
        this.isValid = (value) => {
            const { cardNumber, expirationDate, cvv, cardholderName } = value;
            return cardNumber !== undefined
                && expirationDate !== undefined
                && cvv !== undefined
                && cardholderName !== undefined;
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const oldFormValid = this.isValid(prevState);
        const newFormValid = this.isValid(this.state);
        const becomeValid = !oldFormValid && newFormValid;
        const becomeInvalid = oldFormValid && !newFormValid;
        if (becomeValid) {
            this.props.onFormValueChange(this.state);
        }
        else if (becomeInvalid) {
            this.props.onFormValueChange(undefined);
        }
    }
    render() {
        const _a = this.props, { style, themedStyle } = _a, restProps = __rest(_a, ["style", "themedStyle"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <ValidationInput style={themedStyle.input} textStyle={textStyle.paragraph} labelStyle={textStyle.label} label='CARD NUMBER' placeholder='0000 0000 0000 0000' validator={CardNumberValidator} formatter={CardNumberFormatter} maxLength={19} keyboardType='numeric' onChangeText={this.onCardNumberChange}/>
        <View style={themedStyle.middleContainer}>
          <ValidationInput style={[themedStyle.input, themedStyle.expireInput]} textStyle={textStyle.paragraph} labelStyle={textStyle.label} label='EXPIRE DATE' placeholder='MM/YY' validator={ExpirationDateValidator} formatter={ExpirationDateFormatter} maxLength={5} keyboardType='numeric' onChangeText={this.onExpirationDateChange}/>
          <ValidationInput style={[themedStyle.input, themedStyle.cvvInput]} textStyle={textStyle.paragraph} labelStyle={textStyle.label} label='CVV' placeholder='CVV' validator={CvvValidator} formatter={CvvFormatter} maxLength={3} keyboardType='numeric' onChangeText={this.onCvvChange}/>
        </View>
        <ValidationInput style={[themedStyle.input, themedStyle.cardholderNameInput]} textStyle={textStyle.paragraph} labelStyle={textStyle.label} label='CARDHOLDER NAME' placeholder='Enter Name' validator={CardholderNameValidator} formatter={CardholderNameFormatter} onChangeText={this.onCardHolderNameChange}/>
      </View>);
    }
}
export const AddPaymentCardForm = withStyles(AddNewCardComponent, (theme) => ({
    container: {},
    middleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
    },
    input: {
        backgroundColor: theme['background-basic-color-1'],
    },
    expireInput: {
        width: 90,
    },
    cvvInput: {
        marginLeft: 24,
        width: 64,
    },
    cardholderNameInput: {
        marginTop: 24,
    },
}));
//# sourceMappingURL=addPaymentCardForm.component.js.map