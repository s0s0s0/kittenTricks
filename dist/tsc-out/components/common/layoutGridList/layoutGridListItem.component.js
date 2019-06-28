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
import { ListItem, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../style';
class LayoutGridListItemComponent extends React.Component {
    render() {
        const _a = this.props, { themedStyle, style, data } = _a, restProps = __rest(_a, ["themedStyle", "style", "data"]);
        return (<ListItem style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.detailsContainer}>
          <Text style={textStyle.subtitle} category='s1'>
            {data.title}
          </Text>
          <Text appearance='hint' style={textStyle.paragraph} category='p2'>
            {data.description}
          </Text>
        </View>
        <Image style={themedStyle.image} source={data.image}/>
      </ListItem>);
    }
}
export const LayoutGridListItem = withStyles(LayoutGridListItemComponent, (theme) => ({
    container: {
        flexDirection: 'column',
        borderRadius: 12,
        paddingHorizontal: 0,
        paddingVertical: 0,
        overflow: 'hidden',
    },
    detailsContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    image: {
        flex: 1,
        height: 276,
        resizeMode: 'contain',
    },
}));
//# sourceMappingURL=layoutGridListItem.component.js.map