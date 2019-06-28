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
import { ListItem, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { textStyle } from '../style';
class LayoutListItemComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, data } = _a, restProps = __rest(_a, ["style", "themedStyle", "data"]);
        return (<ListItem {...restProps} style={[themedStyle.container, style]}>
        <Text style={textStyle.subtitle} category='s1'>
          {data.title}
        </Text>
        <Text style={textStyle.paragraph} appearance='hint'>
          {data.description}
        </Text>
      </ListItem>);
    }
}
export const LayoutListItem = withStyles(LayoutListItemComponent, (theme) => ({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    description: Object.assign({ marginTop: 4 }, textStyle.subtitle),
}));
//# sourceMappingURL=layoutListItem.component.js.map