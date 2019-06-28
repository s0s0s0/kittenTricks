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
class MovieDetailListItemComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, description, value } = _a, restProps = __rest(_a, ["style", "themedStyle", "description", "value"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <Text style={themedStyle.descriptionLabel} appearance='hint' category='s1'>
          {description}
        </Text>
        <Text style={themedStyle.valueLabel} category='s1'>
          {value}
        </Text>
      </View>);
    }
}
export const MovieDetailListItem = withStyles(MovieDetailListItemComponent, (theme) => ({
    container: {
        alignItems: 'center',
    },
    descriptionLabel: textStyle.subtitle,
    valueLabel: textStyle.subtitle,
}));
//# sourceMappingURL=movieDetailListItem.component.js.map