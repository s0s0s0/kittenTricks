import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { List, Button, Text, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { ContainerView, textStyle, } from '../../../../components/common';
import { CartProduct, } from '../../../../components/ecommerce';
class ShoppingCartComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.calculateTotalPrice = () => {
            const { products } = this.props;
            return products
                .reduce((acc, item) => {
                return acc + item.count * item.cost;
            }, 0);
        };
        this.onCheckout = () => {
            this.props.onCheckout();
        };
        this.onRemoveProductPress = (index) => {
            this.props.onRemoveProductPress(index);
        };
        this.onAddCopyPress = (index) => {
            this.props.onAddCopyPress(index);
        };
        this.onRemoveCopyPress = (index) => {
            this.props.onRemoveCopyPress(index);
        };
        this.renderProduct = (info) => {
            const { themedStyle } = this.props;
            return (<CartProduct style={themedStyle.item} product={info.item} index={info.index} onRemoveProduct={this.onRemoveProductPress} onAddCopy={this.onAddCopyPress} onRemoveCopy={this.onRemoveCopyPress}/>);
        };
    }
    componentWillMount() {
        this.currency = this.props.products[0].currency;
    }
    render() {
        const { themedStyle, products } = this.props;
        return (<ContainerView style={themedStyle.container} contentContainerStyle={themedStyle.contentContainer}>
        <View>
          <List data={products} renderItem={this.renderProduct}/>
          <View style={themedStyle.totalCostContainer}>
            <Text style={themedStyle.totalCostLabel} category='h6'>
              Total Cost:
            </Text>
            <Text style={themedStyle.totalPriceLabel}>
              {`${this.currency} ${this.calculateTotalPrice()}`}
            </Text>
          </View>
        </View>
        <Button style={themedStyle.checkoutButton} textStyle={textStyle.button} size='giant' onPress={this.onCheckout}>
          CHECKOUT
        </Button>
      </ContainerView>);
    }
}
export const ShoppingCart = withStyles(ShoppingCartComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    item: {
        marginVertical: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    totalCostContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
    totalCostLabel: textStyle.headline,
    totalPriceLabel: {
        fontFamily: 'opensans-bold',
        fontSize: 22,
        lineHeight: 32,
    },
    checkoutButton: {
        marginHorizontal: 16,
        marginBottom: 24,
    },
}));
//# sourceMappingURL=shoppingCart.component.js.map