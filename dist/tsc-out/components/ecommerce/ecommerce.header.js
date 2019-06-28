import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { TopNavigationAction, TopNavigation, } from 'react-native-ui-kitten/ui';
import { SafeAreaView } from '@src/core/navigation';
import { ArrowIosBackFill, CartIconFill, SearchIconOutline, } from '@src/assets/icons';
class EcommerceHeaderComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onBack = () => {
            this.props.onBack();
        };
        this.onShoppingCart = () => {
            this.props.onShoppingCart();
        };
        this.onSearch = () => {
            this.props.onSearch();
        };
        this.renderLeftControl = () => {
            return (<TopNavigationAction icon={ArrowIosBackFill} onPress={this.onBack}/>);
        };
        this.renderShoppingCartIcon = (style) => {
            const { themedStyle } = this.props;
            return CartIconFill(Object.assign({}, style, themedStyle.cartIcon));
        };
        this.renderRightControls = () => {
            return ([
                <TopNavigationAction icon={SearchIconOutline} onPress={this.onSearch}/>,
                <TopNavigationAction icon={this.renderShoppingCartIcon} onPress={this.onShoppingCart}/>,
            ]);
        };
    }
    render() {
        const { themedStyle, title } = this.props;
        return (<SafeAreaView style={themedStyle.container}>
        <TopNavigation alignment='center' title={title} leftControl={this.renderLeftControl()} rightControls={this.renderRightControls()}/>
      </SafeAreaView>);
    }
}
export const EcommerceHeader = withStyles(EcommerceHeaderComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
    cartIcon: {
        tintColor: theme['color-primary-default'],
    },
}));
//# sourceMappingURL=ecommerce.header.js.map