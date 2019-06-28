import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Payment } from './payment.component';
import { PaymentCard } from '../../../../core/model';
import { paymentCard1 } from '../../../../core/data/paymentCard';

interface State {
  paymentCards: PaymentCard[];
}

export class PaymentContainer extends React.Component<NavigationScreenProps> {

  public state: State = {
    paymentCards: [paymentCard1],
  };

  private navigationKey: string = 'PaymentContainer';

  private onCardDetailsPress = (index: number): void => {

  };

  private onBuyPress = (): void => {

  };

  private onAddCardPress = (): void => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Add New Card',
    });
  };

  public render(): React.ReactNode {
    return (
      <Payment
        paymentCards={this.state.paymentCards}
        onCardDetailsPress={this.onCardDetailsPress}
        onBuy={this.onBuyPress}
        onAddCard={this.onAddCardPress}
      />
    );
  }
}
