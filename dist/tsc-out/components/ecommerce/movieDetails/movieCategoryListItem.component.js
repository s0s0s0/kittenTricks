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
import { Text } from 'react-native-ui-kitten/ui';
import { Chips, textStyle, } from '@src/components/common';
class MovieCategoryListItemComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "children"]);
        return (<Chips {...restProps} style={[themedStyle.container, style]}>
        <Text style={themedStyle.label} category='c1'>
          {children}
        </Text>
      </Chips>);
    }
}
export const MovieCategoryListItem = withStyles(MovieCategoryListItemComponent, (theme) => ({
    container: {},
    label: Object.assign({ color: 'white' }, textStyle.caption1),
}));
//# sourceMappingURL=movieCategoryListItem.component.js.map