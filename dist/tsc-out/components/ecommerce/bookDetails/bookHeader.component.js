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
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Text } from '../../../../node_modules/react-native-ui-kitten/ui';
import { RateBar, textStyle, } from '../../common';
import { BookCategoryList } from './bookCategoryList.component';
class BookHeaderComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, image, title, author, categories, rating, price } = _a, restProps = __rest(_a, ["style", "themedStyle", "image", "title", "author", "categories", "rating", "price"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <Image style={themedStyle.image} source={image}/>
        <View style={themedStyle.detailsContainer}>
          <Text style={themedStyle.titleLabel} category='s1'>
            {title}
          </Text>
          <Text style={themedStyle.authorLabel} appearance='hint' category='c1'>
            {`Author: ${author}`}
          </Text>
          <BookCategoryList style={themedStyle.categoryList} data={categories}/>
          <RateBar style={themedStyle.marginBottomLarge} value={rating}/>
          <Text style={themedStyle.priceLabel} category='s1'>
            {price}
          </Text>
        </View>
      </View>);
    }
}
export const BookHeader = withStyles(BookHeaderComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        overflow: 'hidden',
    },
    detailsContainer: {
        marginLeft: 24,
    },
    image: {
        width: 140,
        height: 180,
        borderRadius: 12,
    },
    titleLabel: textStyle.subtitle,
    authorLabel: Object.assign({ marginTop: 4 }, textStyle.caption1),
    priceLabel: Object.assign({ marginTop: 16 }, textStyle.subtitle),
    categoryList: {
        marginVertical: 16,
    },
}));
//# sourceMappingURL=bookHeader.component.js.map