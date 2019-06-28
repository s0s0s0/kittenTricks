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
import { Image, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Radio, RadioGroup, Text, } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
class ProductInfoComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onColorSelectChange = (index) => {
            this.props.onColorSelect(index);
        };
        this.renderColorRadio = (color, index) => {
            const { themedStyle } = this.props;
            return (<Radio key={index} style={themedStyle.radioItem} text={color}/>);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, selectedColorIndex } = _a, withDataProps = __rest(_a, ["style", "themedStyle", "selectedColorIndex"]);
        const { image, name, type, price, description, size, colors } = withDataProps, restProps = __rest(withDataProps, ["image", "name", "type", "price", "description", "size", "colors"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <Image style={[themedStyle.image, themedStyle.bottomSpace]} source={image}/>
        <View style={themedStyle.detailsContainer}>
          <View style={[themedStyle.nameContainer, themedStyle.bottomSpace]}>
            <View>
              <Text style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]} category='h6'>
                {name}
              </Text>
              <Text style={themedStyle.typeLabel} appearance='hint' category='p2'>
                {type}
              </Text>
            </View>
            <Text style={themedStyle.costLabel}>{price}</Text>
          </View>
          <Text style={[themedStyle.descriptionText, themedStyle.bottomSpace]} appearance='hint'>
            {description}
          </Text>
          <Text style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]} category='h6'>
            Size
          </Text>
          <Text style={[themedStyle.descriptionText, themedStyle.bottomSpace]} appearance='hint'>
            {size}
          </Text>
          <Text style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]} category='h6'>
            Color
          </Text>
          <RadioGroup style={themedStyle.colorSelector} selectedIndex={selectedColorIndex} onChange={this.onColorSelectChange}>
            {colors.map(this.renderColorRadio)}
          </RadioGroup>
        </View>
      </View>);
    }
}
export const ProductInfo = withStyles(ProductInfoComponent, (theme) => ({
    container: {},
    image: {
        flex: 1,
        width: null,
        height: 340,
    },
    detailsContainer: {
        marginHorizontal: 16,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameLabel: textStyle.headline,
    typeLabel: textStyle.paragraph,
    costLabel: Object.assign({}, textStyle.headline, { fontSize: 26, lineHeight: 32 }),
    descriptionText: textStyle.paragraph,
    colorSelector: {
        flexDirection: 'row',
        marginHorizontal: 16,
    },
    radioItem: {
        marginRight: 16,
    },
    bottomSpace: {
        marginBottom: 24,
    },
    labelBottomSpace: {
        marginBottom: 8,
    },
}));
//# sourceMappingURL=productInfo.component.js.map