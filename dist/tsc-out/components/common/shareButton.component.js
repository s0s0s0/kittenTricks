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
import { TouchableOpacity, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { ShareIconOutline } from '@src/assets/icons';
class ShareButtonComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, textStyle, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "textStyle", "children"]);
        return (<TouchableOpacity style={[themedStyle.container, style]} {...restProps}>
        {ShareIconOutline(themedStyle.icon)}
        <Text style={[themedStyle.valueLabel, textStyle]} category='p2'>
          {children}
        </Text>
      </TouchableOpacity>);
    }
}
export const ShareButton = withStyles(ShareButtonComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: theme['text-hint-color'],
    },
    valueLabel: {
        marginHorizontal: 8,
    },
}));
//# sourceMappingURL=shareButton.component.js.map