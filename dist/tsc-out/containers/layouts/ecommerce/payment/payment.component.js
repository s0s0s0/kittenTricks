import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Button, Text, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { ContainerView, textStyle, } from '../../../../components/common';
import { PaymentCard, } from '../../../../components/ecommerce';
import { CreditCardIconFill } from '../../../../assets/icons';
class PaymentComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onCardDetails = (index) => {
            this.props.onCardDetailsPress(index);
        };
        this.onBuy = () => {
            this.props.onBuy();
        };
        this.onAddCard = () => {
            this.props.onAddCard();
        };
        this.renderPaymentCard = (item, index) => {
            const { themedStyle } = this.props;
            return (<PaymentCard index={index} style={themedStyle.paymentCard} key={index} paymentCard={item} onDetails={this.onCardDetails}/>);
        };
    }
    render() {
        const { themedStyle, paymentCards } = this.props;
        return (<ContainerView style={themedStyle.container} contentContainerStyle={themedStyle.contentContainer}>
        <View>
          {paymentCards.map(this.renderPaymentCard)}
          <TouchableOpacity style={themedStyle.addCardContainer} activeOpacity={0.9} onPress={this.onAddCard}>
            {CreditCardIconFill(themedStyle.addCardIcon)}
            <Text style={themedStyle.addCardLabel} appearance='hint' category='s1'>
              Add New Card
            </Text>
          </TouchableOpacity>
        </View>
        <Button style={themedStyle.buyButton} textStyle={textStyle.button} size='giant' onPress={this.onBuy}>
          BUY
        </Button>
      </ContainerView>);
    }
}
export const Payment = withStyles(PaymentComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    addCardContainer: {
        minHeight: 192,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: theme['background-basic-color-3'],
    },
    addCardLabel: Object.assign({ marginTop: 12 }, textStyle.subtitle),
    addCardIcon: {
        width: 48,
        height: 34,
        tintColor: theme['text-hint-color'],
    },
    paymentCard: {
        marginBottom: 16,
    },
    buyButton: {},
}));
//# sourceMappingURL=payment.component.js.map