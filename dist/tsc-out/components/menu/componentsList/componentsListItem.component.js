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
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { ListItem, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../../common';
import { ThemeContext, } from '../../../core/themes';
class ComponentsListItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderShowcaseElement = (style, theme) => {
            const showcaseElement = this.props.data.icon(style, theme);
            return React.cloneElement(showcaseElement, {
                style: [style, showcaseElement.props.style],
            });
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, data } = _a, restProps = __rest(_a, ["style", "themedStyle", "data"]);
        return (<ThemeContext.Consumer>{({ currentTheme }) => (<ListItem {...restProps} style={[themedStyle.container, style]}>
          {this.renderShowcaseElement(themedStyle.icon, currentTheme)}
          <Text style={textStyle.subtitle} category='s2'>
            {data.title}
          </Text>
        </ListItem>)}</ThemeContext.Consumer>);
    }
}
export const ComponentsListItem = withStyles(ComponentsListItemComponent, (theme) => ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 0,
    },
    icon: {
        width: 80,
        height: 80,
    },
}));
//# sourceMappingURL=componentsListItem.component.js.map