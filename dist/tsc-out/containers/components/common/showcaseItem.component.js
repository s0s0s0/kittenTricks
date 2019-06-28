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
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
class ShowcaseItemComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, title, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "title", "children"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <Text style={themedStyle.titleLabel} appearance='hint' category='s2'>
          {title}
        </Text>
        {children}
      </View>);
    }
}
export const ShowcaseItem = withStyles(ShowcaseItemComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleLabel: Object.assign({ minWidth: 128 }, textStyle.subtitle),
}));
//# sourceMappingURL=showcaseItem.component.js.map