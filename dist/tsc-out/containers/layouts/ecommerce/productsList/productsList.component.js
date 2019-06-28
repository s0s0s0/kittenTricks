import React from 'react';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Tab, TabView, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { ProductList } from '../../../../components/ecommerce';
class ProductsListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tabCategories: [],
            selectedIndex: 0,
        };
        this.onProductPress = (index) => {
            const selectedProduct = this.findCurrentCategorySelectedProduct(index);
            this.props.onProductPress(selectedProduct);
        };
        this.onProductAddPress = (index) => {
            const selectedProduct = this.findCurrentCategorySelectedProduct(index);
            this.props.onProductAddPress(selectedProduct);
        };
        this.onTabSelect = (selectedIndex) => {
            this.setState({ selectedIndex });
        };
        this.findCurrentCategorySelectedProduct = (index) => {
            const { products } = this.props;
            const { tabCategories, selectedIndex } = this.state;
            const categoryProducts = this.getCategoryProducts(products, tabCategories[selectedIndex]);
            return categoryProducts[index];
        };
        this.getCategoryProducts = (source, category) => {
            const { products } = this.props;
            if (category === 'All') {
                return products;
            }
            return products.filter((item) => {
                return item.type === category;
            });
        };
        this.getProductCategories = () => {
            const { products } = this.props;
            const categories = products.map((item) => {
                return item.type;
            });
            return ['All', ...new Set(categories)];
        };
        this.renderTab = (title, index) => {
            const { themedStyle, products } = this.props;
            const { [index]: tabCategory } = this.state.tabCategories;
            const displayProducts = this.getCategoryProducts(products, tabCategory);
            return (<Tab key={index} title={title.toUpperCase()}>
        <ProductList contentContainerStyle={themedStyle.productsListContent} data={displayProducts} onItemPress={this.onProductPress} onItemAddPress={this.onProductAddPress}/>
      </Tab>);
        };
    }
    componentWillMount() {
        this.state.tabCategories = this.getProductCategories();
        this.state.tabCategories.pop();
    }
    render() {
        const { themedStyle } = this.props;
        const tabElements = this.state.tabCategories.map(this.renderTab);
        return (<TabView style={themedStyle.container} selectedIndex={this.state.selectedIndex} onSelect={this.onTabSelect}>
        {tabElements}
      </TabView>);
    }
}
export const ProductsList = withStyles(ProductsListComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    productsListContent: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
}));
//# sourceMappingURL=productsList.component.js.map