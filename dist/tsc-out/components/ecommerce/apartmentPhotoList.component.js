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
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List, } from 'react-native-ui-kitten/ui';
import { ApartmentPhotoListItem, } from '@src/components/ecommerce/apartmentPhotoListItem.component';
class ApartmentPhotoListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderListItemElement = (item) => {
            return (<ApartmentPhotoListItem style={this.props.themedStyle.item} activeOpacity={0.75} source={item.imageSource} onPress={this.onItemPress}/>);
        };
        this.renderItem = (info) => {
            const { item, index } = info;
            const listItemElement = this.renderListItemElement(item);
            return React.cloneElement(listItemElement, { index });
        };
    }
    render() {
        const _a = this.props, { contentContainerStyle, themedStyle } = _a, restProps = __rest(_a, ["contentContainerStyle", "themedStyle"]);
        return (<List showsHorizontalScrollIndicator={false} {...restProps} contentContainerStyle={[themedStyle.container, contentContainerStyle]} horizontal={true} renderItem={this.renderItem}/>);
    }
}
export const ApartmentPhotoList = withStyles(ApartmentPhotoListComponent, (theme) => ({
    container: {},
    item: {
        width: 180,
        height: 120,
        marginHorizontal: 8,
        backgroundColor: theme['background-basic-color-2'],
    },
}));
//# sourceMappingURL=apartmentPhotoList.component.js.map