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
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { List, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { ProductListItem, } from './productListItem.component';
class ProductListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onProductAddPress = (index) => {
            this.props.onItemAddPress(index);
        };
        this.onProductPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderListItemElement = (item) => {
            const { themedStyle } = this.props;
            return (<ProductListItem style={themedStyle.item} activeOpacity={0.75} image={item.photo.imageSource} name={item.name} type={item.type} price={`${item.cost} ${item.currency}`} onAddPress={this.onProductAddPress} onPress={this.onProductPress}/>);
        };
        this.renderItem = (info) => {
            const { item, index } = info;
            const listItemElement = this.renderListItemElement(item);
            return React.cloneElement(listItemElement, { index });
        };
    }
    render() {
        const _a = this.props, { contentContainerStyle, themedStyle, data } = _a, restProps = __rest(_a, ["contentContainerStyle", "themedStyle", "data"]);
        return (<List {...restProps} contentContainerStyle={[contentContainerStyle, themedStyle.container]} data={data} renderItem={this.renderItem} numColumns={2}/>);
    }
}
export const ProductList = withStyles(ProductListComponent, (theme) => ({
    container: {},
    item: {
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 8,
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=productList.component.js.map