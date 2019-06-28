import React from 'react';
import { ShoppingCart } from './shoppingCart.component';
import { products } from '@src/core/data/product';
export class ShoppingCartContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.prepareProducts = () => {
            return [products[0], products[1]]
                .map((item) => {
                return Object.assign({}, item, { count: 1 });
            });
        };
        this.state = {
            cartProducts: this.prepareProducts(),
        };
        this.onCheckoutPress = () => {
        };
        this.onRemoveProductPress = (index) => {
            const { cartProducts } = this.state;
            const removeIndex = cartProducts.indexOf(cartProducts[index]);
            if (removeIndex > -1) {
                const updatedProducts = cartProducts;
                updatedProducts.splice(removeIndex, 1);
                this.setState({ cartProducts: updatedProducts });
            }
        };
        this.onAddCopyPress = (index) => {
            const copyProducts = this.state.cartProducts;
            copyProducts[index].count++;
            this.setState({ cartProducts: copyProducts });
        };
        this.onRemoveCopyPress = (index) => {
            const copyProducts = this.state.cartProducts;
            if (copyProducts[index].count > 0) {
                copyProducts[index].count--;
                this.setState({ cartProducts: copyProducts });
            }
        };
    }
    render() {
        return (<ShoppingCart products={this.state.cartProducts} onCheckout={this.onCheckoutPress} onRemoveProductPress={this.onRemoveProductPress} onAddCopyPress={this.onAddCopyPress} onRemoveCopyPress={this.onRemoveCopyPress}/>);
    }
}
//# sourceMappingURL=shoppingCart.container.js.map