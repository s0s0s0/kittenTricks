import React from 'react';
import { Payment } from './payment.component';
import { paymentCard1 } from '@src/core/data/paymentCard';
export class PaymentContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            paymentCards: [paymentCard1],
        };
        this.navigationKey = 'PaymentContainer';
        this.onCardDetailsPress = (index) => {
        };
        this.onBuyPress = () => {
        };
        this.onAddCardPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Add New Card',
            });
        };
    }
    render() {
        return (<Payment paymentCards={this.state.paymentCards} onCardDetailsPress={this.onCardDetailsPress} onBuy={this.onBuyPress} onAddCard={this.onAddCardPress}/>);
    }
}
//# sourceMappingURL=payment.container.js.map