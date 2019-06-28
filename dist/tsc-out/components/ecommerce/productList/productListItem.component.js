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
import { View, Image, TouchableOpacity, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
import { CartIconOutline } from '@src/assets/icons';
class ProductListItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onAddToBucket = () => {
            this.props.onAddPress(this.props.index);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, image, name, type, price } = _a, restProps = __rest(_a, ["style", "themedStyle", "image", "name", "type", "price"]);
        return (<TouchableOpacity {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <Image style={themedStyle.image} source={image}/>
        <View style={themedStyle.infoContainer}>
          <View>
            <Text style={themedStyle.nameLabel} category='s1'>
              {name}
            </Text>
            <Text style={themedStyle.typeLabel} appearance='hint' category='c1'>
              {type}
            </Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Text style={themedStyle.costLabel} category='s1'>
              {price}
            </Text>
            <Button style={themedStyle.buyButton} textStyle={textStyle.button} icon={CartIconOutline} onPress={this.onAddToBucket}/>
          </View>
        </View>
      </TouchableOpacity>);
    }
}
export const ProductListItem = withStyles(ProductListItemComponent, (theme) => ({
    container: {
        minHeight: 272,
        borderRadius: 12,
        overflow: 'hidden',
    },
    infoContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        flex: 1,
        width: null,
        height: 140,
    },
    nameLabel: textStyle.subtitle,
    typeLabel: textStyle.caption1,
    costLabel: textStyle.subtitle,
    buyButton: {
        width: 32,
        height: 32,
    },
}));
//# sourceMappingURL=productListItem.component.js.map