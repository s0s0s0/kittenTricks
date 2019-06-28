import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Product } from '../../../../core/model';
import { products } from '../../../../core/data/product';
import { ProductsList } from './productsList.component';

interface State {
  products: Product[];
}

export class ProductsListContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    products: products,
  };

  private onProductPress = (product: Product) => {

  };

  private onProductAddPress = (product: Product) => {

  };

  public render(): React.ReactNode {
    return (
      <ProductsList
        products={this.state.products}
        onProductPress={this.onProductPress}
        onProductAddPress={this.onProductAddPress}
      />
    );
  }
}
