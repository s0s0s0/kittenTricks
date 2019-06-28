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
import { Text } from 'react-native-ui-kitten/ui';
import { RateBar, textStyle, } from '../../common';
import { MovieCategoryList } from './movieCategoryList.component';
class MovieHeaderComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, image, title, description, categories, rating } = _a, restProps = __rest(_a, ["style", "themedStyle", "image", "title", "description", "categories", "rating"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <Image style={themedStyle.image} source={image}/>
        <Text style={themedStyle.titleLabel} category='h6'>
          {title}
        </Text>
        <Text style={themedStyle.descriptionLabel} category='p2'>
          {description}
        </Text>
        <MovieCategoryList style={themedStyle.categoriesContainer} data={categories}/>
        <RateBar value={rating}/>
      </View>);
    }
}
export const MovieHeader = withStyles(MovieHeaderComponent, (theme) => ({
    container: {
        alignItems: 'center',
        overflow: 'hidden',
    },
    categoriesContainer: {
        justifyContent: 'center',
        marginHorizontal: 4,
        marginBottom: 24,
    },
    image: {
        width: 256,
        height: 360,
        borderRadius: 12,
        marginBottom: 24,
        backgroundColor: theme['background-basic-color-1'],
    },
    titleLabel: Object.assign({ textAlign: 'center' }, textStyle.headline),
    descriptionLabel: Object.assign({ marginTop: 8, marginBottom: 16 }, textStyle.paragraph),
}));
//# sourceMappingURL=movieHeader.component.js.map