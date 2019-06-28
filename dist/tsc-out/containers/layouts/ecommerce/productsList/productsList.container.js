import React from 'react';
import { products } from '@src/core/data/product';
import { ProductsList } from './productsList.component';
export class ProductsListContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            products: products,
        };
        this.onProductPress = (product) => {
        };
        this.onProductAddPress = (product) => {
        };
    }
    render() {
        return (<ProductsList products={this.state.products} onProductPress={this.onProductPress} onProductAddPress={this.onProductAddPress}/>);
    }
}
//# sourceMappingURL=productsList.container.js.map